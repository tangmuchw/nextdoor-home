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
	}
}

export default nextConfig
