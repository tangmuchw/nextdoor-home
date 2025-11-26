import clsx from 'clsx'

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import '@/styles/globals.scss'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Nextdoor - 邻里社交，传递善意',
	description:
		'Nextdoor邻里社交微信小程序，以“邻里社交，传递善意”为使命。我们深耕微信生态，专注于构建和睦的楼上楼下关系，提供邻里互助、闲置互换、社区活动等特色功能，是纯粹服务于中国社区居民的温馨空间，与同名国际平台有本质区别。',
	keywords:
		'Nextdoor,微信小程序,中国社区,本土化,传递善意,发布想法,问答,邻里互助,线下沙龙'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="zh-CN">
			<head>
				{/* 关键：禁用用户缩放 + 动态 viewport */}
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
				/>
				<meta name="baidu-site-verification" content="codeva-xPYTqyK1Gd" />
			</head>

			<body
				className={clsx(
					'light-theme',
					'overflow-x-hidden overflow-y-auto',
					`${geistSans.variable} ${geistMono.variable} antialiased`
				)}
			>
				{children}
			</body>
		</html>
	)
}
