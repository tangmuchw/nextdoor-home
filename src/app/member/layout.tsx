import type { Metadata } from 'next'

import { PageContainer } from '@/components'
import { MEMBER_NAV_LINKS } from '@/constants/nav'

export const metadata: Metadata = {
	title: '会员服务 - Nextdoor 邻里社交，传递善意',
	description:
		'Nextdoor 邻里社交微信小程序会员服务，提供免费会员、月卡会员、VIP会员和合作伙伴会员等多种选择。连接邻里，发现身边精彩，享受专属社区服务和资源对接。',
	keywords:
		'Nextdoor,邻里社交,社区服务,会员服务,月卡会员,VIP会员,邻里印象,社区经济,邻里社交小程序,微信小程序'
}

export default function MemberLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<PageContainer header={{ links: MEMBER_NAV_LINKS }}>
			{children}
		</PageContainer>
	)
}
