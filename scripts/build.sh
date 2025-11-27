#!/bin/bash
source scripts/common.sh

ENV=${1:-dev}

export APP_ENV=$ENV

DEPLOY_ENV_FILE=".env"

log_info "🚀 Start building..."
log_info "👉 Environment: ${APP_ENV}"

# 检查Docker
check_command docker
check_command docker compose

# 获取最新的 Git tag
log_info "🔍 Trying to get latest git tag..."
APP_TAG=$(get_app_tag)

# 校验：如果未获取到tag，终止脚本
if [ -z "$APP_TAG" ]; then
  exit 1  # 非零退出码表示失败
else 
  log_info "💬 Use the latest git tag as the version: $APP_TAG"
fi

# 加载 配置 环境变量
if [ -f ${DEPLOY_ENV_FILE} ]; then
    safe_load_env ${DEPLOY_ENV_FILE}
    log_info "✅ The deploy environment variable file has been loaded: ${DEPLOY_ENV_FILE}"
else
    log_error "The deploy environment variable file does not exist: ${DEPLOY_ENV_FILE}"
    exit 1
fi


# 生成 SEO 相关文件
echo "🚀 开始生成 SEO 相关文件..."
yarn generate:seo && yarn generate:version 

# 构建镜像
log_info "🐳 Build a Docker image ${APP_NAME}:${APP_TAG}"
start_time=$(date +%s)
log_info "⏰ Building start time: $(date +'%Y-%m-%d %H:%M:%S')"


# rm -rf node_modules/.cache
# rm -rf ./dist
# yarn && yarn build:${APP_ENV}

DOCKER_BUILDKIT=1 APP_TAG=$APP_TAG docker compose \
  -f "docker-compose.${APP_ENV}.yml" \
  build \
  --force-rm \
  --parallel || { echo "❌ Docker 构建失败"; rm -f ./public/robots.txt ./public/sitemap.xml ./public/version.json; exit 1;}


APP_ENV_SUFFIX=$([[ "$APP_ENV" == "prod" ]] && echo "" || echo "-${APP_ENV}")
IMAGE_NAME="${APP_NAME}${APP_ENV_SUFFIX}:latest"
if ! check_image_exists "$IMAGE_NAME"; then
    exit 1
fi

# 保存镜像
IMAGE_TAR_FILE="$APP_NAME-$APP_TAG-${APP_ENV}.tar"
log_info "📄 Save the image to a file: $IMAGE_TAR_FILE"

docker save $IMAGE_NAME > $IMAGE_TAR_FILE || { log_error "Image saving failed"; exit 1; }
log_info "💬 Image file size: $IMAGE_TAR_FILE"
ls -lh $IMAGE_TAR_FILE

# 清除悬空镜像
log_info "✅ Prune all suspended images in local"
docker image prune -f


end_time=$(date +%s)
duration_seconds=$((end_time - start_time))  # 总耗时（秒）
minutes=$((duration_seconds / 60))           # 转换为分钟
seconds=$((duration_seconds % 60))           # 剩余秒数

# 格式化输出耗时
if [ $minutes -gt 0 ]; then
  log_info "⏰ Total build time: ${minutes}分${seconds}秒"
else
  log_info "⏰ Total build time: ${seconds}秒"
fi
