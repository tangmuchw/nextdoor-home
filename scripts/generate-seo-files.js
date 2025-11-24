const fs = require('fs')
const path = require('path')
const { SitemapStream, streamToPromise } = require('sitemap')
const dayjs = require('dayjs')
const { Readable } = require('stream')
const { SEO_CONFIG } = require('./config')

const lastModIOSString = dayjs().format()

// 生成 robots.txt
function generateRobotsTxt() {
	const content = `# Robots.txt generated at ${lastModIOSString}
User-agent: *
Disallow: /api/
Disallow: /share/
Disallow: /_next/
Disallow: /ui/
Disallow: /mp/
Disallow: /api-docs

Sitemap: ${SEO_CONFIG.domain}/sitemap.xml
`

	fs.writeFileSync(path.join(SEO_CONFIG.distDir, 'robots.txt'), content, 'utf8')
	console.log('✅ robots.txt 生成成功')
}

// 生成 sitemap.xml
async function generateSitemap() {
	try {
		const smStream = new SitemapStream({
			hostname: SEO_CONFIG.domain,
			xmlns: {
				news: false,
				xhtml: false,
				image: false,
				video: false
			}
		})

		// 准备数据流
		const dataStream = new Readable({
			objectMode: true,
			read() {}
		})

		// 添加页面到 sitemap
		SEO_CONFIG.pages.forEach(page => {
			smStream.write({
				url: page.url,
				changefreq: page.changefreq,
				priority: page.priority,
				lastmod: lastModIOSString
			})
		})

		// 结束流
		smStream.end()

		const sitemap = await streamToPromise(smStream)

		const finalSitemap = sitemap
			.toString()
			.replace(
				/<loc>https:\/\/www\.bbearcard\.cn\/<\/loc>/g,
				'<loc>https://www.bbearcard.cn</loc>'
			)

		// 保存文件
		fs.writeFileSync(path.join(SEO_CONFIG.distDir, 'sitemap.xml'), finalSitemap)

		console.log('✅ sitemap.xml 生成成功')
	} catch (e) {
		console.error('❌ sitemap 生成失败:', e)
	}
}

// 自动生成所有文件
;(async () => {
	// 确保输出目录存在
	if (!fs.existsSync(SEO_CONFIG.distDir)) {
		// recursive 是否递归
		fs.mkdirSync(SEO_CONFIG.distDir, { recursive: true })
	}

	generateRobotsTxt()
	await generateSitemap()
})()
