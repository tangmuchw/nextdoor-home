import type { Metadata } from 'next'

import { PageContainer } from '@/components'
import { MEMBER_NAV_LINKS } from '@/constants/nav'

export const metadata: Metadata = {
	title: '联系我们 - Nextdoor 邻里社交，传递善意',
	description:
		'联系 Nextdoor 邻里社交小程序客服团队，获取会员服务支持。电话咨询或关注公众号获取更多社区服务信息。',
	keywords:
		'Nextdoor联系方式,邻里社交客服,社区服务电话,Nextdoor微信公众号,会员服务咨询'
}

export default function ContactLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <PageContainer>{children}</PageContainer>
}
