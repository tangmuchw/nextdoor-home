#!/bin/bash

source scripts/common.sh

log_info "🚀 Start building..."
log_info "👉 Environment: prod"

# 检查Docker
check_command docker
check_command docker compose

# 获取最新的 Git tag
log_info "🔍 Trying to get latest git tag..."
APP_TAG=$(get_app_tag)

# 校验：如果未获取到tag，终止脚本
if [ -z "$APP_TAG" ]; then
  log_error "Failed to get git tag (maybe no tags in repository)"
  exit 1  # 非零退出码表示失败
else 
  log_info "💬 Use the latest git tag as the version: $APP_TAG"
fi


# 生成 SEO 相关文件
echo "🚀 开始生成 SEO 相关文件..."
yarn generate:seo && yarn generate:version 


# 构建镜像
log_info "🐳 Build a Docker image ${APP_NAME}:${APP_TAG}"
start_time=$(date +%s)
log_info "⏰ Building start time: $(date +'%Y-%m-%d %H:%M:%S')"

yarn build:image || { echo "❌ Docker 构建失败"; rm -f ./public/robots.txt ./public/sitemap.xml ./public/version.json; exit 1;}
