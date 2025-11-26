const path = require('path')

const SEO_CONFIG = {
	domain: 'https://www.baicl.cc',
	distDir: path.join(__dirname, '../public'),
	// 网站重要页面列表
	pages: [
		{ url: '/', changefreq: 'daily', priority: 1.0 },
		{ url: '/member', changefreq: 'daily', priority: 0.8 },
		{ url: '/contact', changefreq: 'daily', priority: 0.8 }
		// { url: '/services', changefreq: 'weekly', priority: 0.9 },
		// { url: '/contact', changefreq: 'yearly', priority: 0.7 }
	]
}

module.exports = { SEO_CONFIG }
