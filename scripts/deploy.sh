#!/bin/bash
source scripts/common.sh

ENV=${1:-dev}

export APP_ENV=$ENV

sh scripts/build.sh $APP_ENV


DEPLOY_ENV_FILE=".env"
BUILD_ENV_FILE=".env.${APP_ENV}"
COMPOSE_FILE_OPTION="-f docker-compose.${APP_ENV}.yml"
COMPOSE_FILES=(
  ".env.prod"
  "docker-compose.prod.yml"
)

log_info "🚀 Start deploying..."
log_info "👉 Environment: ${APP_ENV}"

# 获取最新的 Git tag
APP_TAG=$(get_app_tag)

# 加载 配置 环境变量
if [ -f ${DEPLOY_ENV_FILE} ]; then
    safe_load_env ${DEPLOY_ENV_FILE}
    log_info "✅ The deploy environment variable file has been loaded: ${DEPLOY_ENV_FILE}"
else
    log_error "The deploy environment variable file does not exist: ${DEPLOY_ENV_FILE}"
    exit 1
fi

COMPOSE_PROJECT_NAME="${APP_NAME}-${APP_ENV}"

IMAGE_TAR_FILE="$APP_NAME-$APP_TAG-${APP_ENV}.tar"
if [ -f ${IMAGE_TAR_FILE} ]; then
    log_info "✅ The compressed files exist: ${IMAGE_TAR_FILE}"
else
    log_error "The compressed files do not exist: ${IMAGE_TAR_FILE}";
    exit 1;
fi

log_info "💾 The image file size: $IMAGE_TAR_FILE"
ls -lh $IMAGE_TAR_FILE

# 上传镜像到服务器
APP_TEMP_DIR="${APP_ROOT_DIR}/temp"
# -C 启动压缩传输
log_info "📤 Send the image file to the server: $SERVER_IP:${APP_TEMP_DIR}"
scp -i $SERVER_ACCESS_PRIVATE_KEY -C $IMAGE_TAR_FILE root@$SERVER_IP:$APP_TEMP_DIR || { log_error "Image File send failed"; exit 1; }


APP_COMPOSE_DIR="${APP_ROOT_DIR}/compose"
log_info "📤 Send the .env.* and docker-compose.*.yml files to the server: $SERVER_IP:${APP_COMPOSE_DIR}"
scp -i $SERVER_ACCESS_PRIVATE_KEY -C "${COMPOSE_FILES[@]}" root@$SERVER_IP:$APP_COMPOSE_DIR || { log_error "Compose files send failed"; exit 1; }

log_info "🚚 Deploy the app on the server..."


ssh -i $SERVER_ACCESS_PRIVATE_KEY root@$SERVER_IP bash << EOF
  set -euo pipefail  # 严格模式：出错退出、未设变量报错、管道错误检测

  # echo "✨ Set permissions (ensure Nginx is accessible)"
  # -R 递归选项 第一个数字 所有者，第二个数字 所属组,第三个数字 其他用户
  # 读 r = 4, 写 w = 2, 执行 x = 1,
  # chmod -R 775 ${APP_ROOT_DIR}/test ${APP_ROOT_DIR}/prod 
 
  echo "✨ Load image"
  docker load -i $APP_TEMP_DIR/$IMAGE_TAR_FILE

  cd $APP_COMPOSE_DIR

  echo "✨ Stop the previously running image"
  docker-compose ${COMPOSE_FILE_OPTION} --env-file ${BUILD_ENV_FILE} -p ${COMPOSE_PROJECT_NAME} down

  echo "✨ Restart the latest version of the image"
  docker-compose ${COMPOSE_FILE_OPTION} --env-file ${BUILD_ENV_FILE} -p ${COMPOSE_PROJECT_NAME} up -d --no-build

  echo "✨ Delete the image compressed package: ${IMAGE_TAR_FILE}"
  rm -rf $APP_TEMP_DIR/$IMAGE_TAR_FILE

  echo "✅ Prune all suspended images"
  docker image prune -f
  
  echo "🟢 Deployment successful! Environment: ${APP_ENV}, Application: $APP_NAME:$APP_TAG"
EOF

# 7. 清理本地临时文件
echo "✅ Delete temp files..."
rm -f $IMAGE_FILE
rm -f ./public/robots.txt ./public/sitemap.xml ./public/version.json


log_info "🎉 Delete temp files..."
rm -rf $IMAGE_TAR_FILE


log_info "🎉 Deploying completed"
