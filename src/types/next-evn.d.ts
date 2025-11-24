// env.d.ts
namespace NodeJS {
	interface ProcessEnv {
		// 通用环境变量
		NODE_ENV: 'development' | 'production' | 'test'

		// 开发环境变量
		// DEV_API_KEY?: string

		// 生产环境变量
		// PROD_DB_URL?: string

		// 客户端可访问变量 (必须 NEXT_PUBLIC_ 前缀)

		// 访问 API 密码
		API_SECRET_TOKEN: string

		// 微信配置
		NEXT_PUBLIC_NEXTDOOR_WEIXIN_APP_ID: string

		// redis 配置
		REDIS_URL: string
		REDIS_PASSWORD: string

		// 防盗链设计
		SITE_DOMAIN: string
	}
}
