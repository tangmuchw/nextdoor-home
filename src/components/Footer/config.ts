import { OUTER_LINKS } from '@/constants/links'
import { PAGE_PATHS } from '@/constants/path'

export const FOOTER_LINKS: {
	title: string
	links: {
		href: string
		text: string
	}[]
}[] = [
	{
		title: '关于 Nextdoor',
		links: [
			{
				href: '#',
				text: '公司简介'
			},
			{
				href: '#',
				text: '发展历程'
			},
			{
				href: '#',
				text: '团队介绍'
			},
			{
				href: '#',
				text: '加入我们'
			}
		]
	},
	{
		title: '产品服务',
		links: [
			{
				href: PAGE_PATHS['home'],
				text: '核心功能'
			},
			{
				href: PAGE_PATHS['member'],
				text: '会员服务'
			},
			{
				href: OUTER_LINKS['versionUpdateLogs'],
				text: '更新日志'
			}
		]
	},
	{
		title: '帮助支持',
		links: [
			// {
			// 	href: '#',
			// 	text: '使用指南'
			// },
			// {
			// 	href: '#',
			// 	text: '常见问题'
			// },
			{
				href: PAGE_PATHS['contact'],
				text: '联系我们'
			},
			{
				href: OUTER_LINKS['suggestions'],
				text: '意见反馈'
			}
		]
	},
	{
		title: '关注我们',
		links: [
			{
				href: OUTER_LINKS['aboutNextdoor'],
				text: '微信公众号'
			}
			// {
			// 	href: '#',
			// 	text: '微博'
			// },
			// {
			// 	href: '#',
			// 	text: '抖音'
			// },
			// {
			// 	href: '#',
			// 	text: '小红书'
			// }
		]
	}
]
