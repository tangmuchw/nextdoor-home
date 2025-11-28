# Nextdoor 官网

> 这是一个[Next.js]（https://nextjs.org）项目启动与[' create-next-app ']（https://nextjs.org/docs/app/api-reference/cli/create-next-app）。

## 启动

- node 版本: 20.19
- 启动命令:

```bash
yarn development
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## build

```sh

docker compose -f docker-compose.dev.yml -p nextdoor-home-dev up -d --no-build
docker compose -f docker-compose.dev.yml -p nextdoor-home-dev down

docker compose -f docker-compose.prod.yml -p nextdoor-home-prod up -d --no-build
docker compose -f docker-compose.prod.yml -p nextdoor-home-prod down

# 线上
docker-compose -f docker-compose.prod.yml -p nextdoor-home-prod up -d --no-build
docker-compose -f docker-compose.prod.yml  -p nextdoor-home-prod down
```

## env 文件说明

### .env 文件

```sh
# 公共环境变量
APP_NAME="nextdoor-home"
SERVER_IP=
SERVER_ACCESS_PRIVATE_KEY="" # 密钥文件
APP_ROOT_DIR="" # app 部署根目录
```

### .env.{development|prod} 文件

```sh
# 微信配置
NEXT_PUBLIC_NEXTDOOR_WEIXIN_APP_ID=""
```
