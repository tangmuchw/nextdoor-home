# ========== 安装依赖 ==========
FROM node:20.19-alpine AS deps

# 设置工作目录
WORKDIR /app

RUN --mount=type=cache,target=/root/.yarn \ 
    yarn config set registry https://registry.npmmirror.com && \
    # 并行下载增强
    yarn config set child-concurrency $(nproc) && \ 
    # 优先使用本地缓存
    yarn config set prefer-offline true

COPY package.json yarn.lock ./

# 使用缓存挂载安装依赖, 安装生产依赖 (清理缓存)
RUN --mount=type=cache,target=/root/.yarn \
    yarn install --frozen-lockfile --production --ignore-scripts --prefer-offline 

# ========== 构建应用 ==========
FROM node:20.19-alpine AS builder

WORKDIR /app

ARG APP_ENV

ENV APP_ENV=${APP_ENV}

# 从依赖阶段复制node_modules
COPY --from=deps /app/node_modules ./node_modules

COPY package.json yarn.lock ./

# 安装开发依赖（使用缓存）
RUN --mount=type=cache,target=/root/.yarn \
    --mount=type=cache,target=/app/.npm \
    yarn install --frozen-lockfile --production=false --ignore-scripts --prefer-offline

# 复制源代码
COPY . .

# 构建应用（使用Next.js缓存）
RUN --mount=type=cache,target=/app/.next/cache \
    --mount=type=cache,target=/root/.yarn \
    NODE_OPTIONS="--max-old-space-size=4096" \
    NEXT_TELEMETRY_DISABLED=1 \
    yarn build:${APP_ENV} --experimental-app-only


# ========== 阶段3: 生产运行时 ==========
FROM node:20.19-alpine AS runner

ARG APP_ENV
ARG APP_TAG

ENV APP_ENV=${APP_ENV}
ENV APP_TAG=${APP_TAG}
ENV TZ=Asia/Shanghai

# 添加公司元数据
LABEL maintainer="chenwei@bbearcard.cn" \
    org.opencontainers.image.vendor="pangmaomibuchiyu" \
    cn.bbearcard.component="bbearcard.cn"

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# COPY  ./.next/standalone /app
# COPY  ./.next/static /app/.next/static
# COPY ./public /app/public

RUN printf '{"app_env":"%s","app_tag":"%s","build_time":"%s"}\n' \
    "$APP_ENV" "$APP_TAG" "$(date +%Y-%m-%d_%H:%M:%S)" > /app/version.json

# 暴露端口并启动
EXPOSE 3000
CMD ["node", "server.js"]