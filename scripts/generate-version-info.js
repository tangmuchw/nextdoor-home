// scripts/generate:version-info.js
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
const { SEO_CONFIG } = require('./config')
const dayjs = require('dayjs')

// 获取最新 Git tag
const getGitTag = () => {
	try {
		return execSync('git describe --tags --abbrev=0').toString().trim()
	} catch (error) {
		console.warn('无法获取 Git tag, 使用 package.json 版本号')
		try {
			const pkg = require('../package.json')
			return pkg.version || '0.0.0'
		} catch {
			return '0.0.0'
		}
	}
}

// 生成版本信息
const generateVersionInfo = () => {
	console.log(`📋 开始生成版本信息...`)

	try {
		const versionInfo = {
			tag: getGitTag(),
			buildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
			commitHash: execSync('git rev-parse --short HEAD').toString().trim()
		}

		// 写入版本文件
		const filePath = path.join(SEO_CONFIG.distDir, 'version.json')
		const versionInfoStr = JSON.stringify(versionInfo, null, 2)
		fs.writeFileSync(filePath, versionInfoStr)
		console.log(`✅ 版本信息已生成: ${versionInfoStr}`)
	} catch (err) {
		console.error('❌ 版本信息生成失败:', err.message)
		process.exit(1) // 非0表示失败
	}
}

generateVersionInfo()
