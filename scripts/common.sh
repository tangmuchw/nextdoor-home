#!/bin/bash

set -e # 遇到任何命令返回非零状态码（即执行失败）时，立即终止脚本运行。

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# 日志函数
log_info() {
    echo -e "${GREEN}[INFO]${NC} $(date '+%Y-%m-%d %H:%M:%S') - $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $(date '+%Y-%m-%d %H:%M:%S') - ⚠️ $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $(date '+%Y-%m-%d %H:%M:%S') - ❌ $1"
}

# 检查命令是否存在
check_command() {
    if ! command -v $1 &> /dev/null; then
        log_error "$1 命令未找到，请先安装"
        exit 1
    fi
}

safe_load_env() {
    local env_file=$1
    
    if [ ! -f "$env_file" ]; then
        echo "Error: Environment file $env_file not found" >&2
        return 1
    fi
    
    # 创建临时文件，只包含有效的变量定义
    local temp_file=$(mktemp)
    
    # 过滤出有效的变量行
    grep -E '^[[:alpha:]_][[:alnum:]_]*=' "$env_file" > "$temp_file"
    
    # 加载清理后的文件
    source "$temp_file"
    
    # 清理临时文件
    rm -f "$temp_file"
}

get_app_tag() {
    # 获取最新的 Git tag, --abbrev 用于控制输出中 “提交哈希的缩写长度”, 2>/dev/null  Shell 重定向语法： 忽略命令执行时可能产生的错误信息
    local latest_tag=$(git describe --tags --abbrev=0 2>/dev/null)
    
    # 如果找不到 tag，直接退出
    if [ -z "$latest_tag" ]; then
        exit 1; 
    fi

    echo "$latest_tag"
}

check_image_exists() {
    local image="$1"
    # 检查镜像是否存在（精确匹配“仓库:标签”）
    # docker images --format 输出镜像的“仓库:标签”，grep -q 静默匹配，不输出内容
    if ! docker images --format "{{.Repository}}:{{.Tag}}" | grep -q "^${image}$"; then
        log_error "The image $image does not exist. Please build this image first"
        return 1  # 镜像不存在，返回错误状态
    fi
    return 0  # 镜像存在，返回成功状态
}