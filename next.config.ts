import path from 'path'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	output: 'standalone',
	compress: true,
	trailingSlash: false, // 明确关闭尾部斜杠
	images: {
		unoptimized: true // 静态导出必须禁用图片优化
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production'
	},
	// 生产环境关闭源映射
	productionBrowserSourceMaps: false,
	turbopack: {
		resolveAlias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	webpack: config => {
		// 核心：添加与 tsconfig 匹配的别名解析
		config.resolve.alias = {
			...config.resolve.alias,
			// 映射 '@' 到项目根目录
			'@': path.resolve(__dirname, 'src')
		}

		return config
	},

	// 设置较短的缓存时间
	headers: async () => {
		if (process.env.NODE_ENV === 'production') {
			return [
				{
					source: '/:path*',
					headers: [
						{
							key: 'Cache-Control',
							value: 'public, max-age=60, s-maxage=60' // 1分钟缓存
						},
						// 禁止浏览器进行 MIME类型嗅探（猜测文件类型）
						{ key: 'X-Content-Type-Options', value: 'nosniff' },
						// 实施内容安全策略（CSP），限制页面可加载资源的来源，有效防御XSS、数据注入等攻击
						// default-src 'self'：默认只允许加载当前域名（同源） 下的资源（脚本、样式、图片等）。
						// img-src 'self' cdn.example.com
						{ key: 'Content-Security-Policy', value: "default-src 'self'" },
						// 强制浏览器通过HTTPS访问网站（HTTP自动重定向到HTTPS），防御中间人攻击（MITM）
						// max-age=63072000：
						// 生效时长（秒），此处≈2年（365天×2×86400秒）。
						// includeSubDomains：
						// 所有子域名同样启用HSTS（如blog.example.com）。
						// preload：
						// 申请加入浏览器HSTS预加载列表（Chrome/Firefox等内置强制HTTPS的域名列表）
						{
							key: 'Strict-Transport-Security',
							value: 'max-age=63072000; includeSubDomains; preload'
						}
					]
				}
			]
		}

		return []
	}
}

export default nextConfig
