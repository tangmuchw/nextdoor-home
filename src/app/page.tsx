'use client'

import clsx from 'clsx'

import { useEffect, useState } from 'react'

import { AppImage, Icon, PageContainer } from '@/components'
import AppButton from '@/components/AppButton'
import { OUTER_LINKS } from '@/constants/links'
import { HOME_NAV_LINKS } from '@/constants/nav'
import { PAGE_PATHS } from '@/constants/path'
import useDebounce from '@/hooks/useDebounce'
import useIsMobile from '@/hooks/useIsMobile'
import { generateMpPathURL } from '@/utils/wx'

const FEATURES: { icon: AppDTO.IconName; title: string; desc: string }[] = [
	{
		icon: 'faIdCard',
		title: '邻里名片',
		desc: '创建专属邻里名片，轻松认识同楼邻居，建立真实可信的社区联系。'
	},
	{
		icon: 'faQuestionCircle',
		title: '邻里问答',
		desc: '有问题问邻居！从生活窍门到社区信息，快速获得靠谱的本地答案。'
	},
	{
		icon: 'faLightbulb',
		title: '分享想法',
		desc: '随时分享生活点滴、有趣见闻，与邻里交流心得，发现共同兴趣。'
	},
	{
		icon: 'faUsers',
		title: '线下沙龙',
		desc: '发现并参与附近的社区活动，结交新朋友，丰富您的社交生活。'
	}
]

const MEMBERS: {
	id: 'free-vip' | 'month-vip'
	title: string
	price: string
	period: string
	benefits: string[]
}[] = [
	{
		id: 'free-vip',
		title: '免费会员',
		price: '0',
		period: '注册就送，永久免费',
		benefits: [
			'免费参加线下沙龙活动',
			'免费提问咨询，获得专业回答',
			'免费登记名片，被动获取订单',
			'社区经济自营服务（最高1%收费）',
			'可申请开通"邻里印象"服务'
		]
	},
	{
		id: 'month-vip',
		title: '月卡会员',
		price: '30',
		period: '每月',
		benefits: [
			'包含所有免费会员权益',
			'尊贵标识，提升信任度',
			'平台每日协助对接圈子会员',
			'平台主动推荐匹配客户',
			'学习邻里社交和互联网方法论',
			'问答客资提醒，不错过机会',
			'满12个月可选择加盟，分成50%',
			'...'
		]
	}
]

const ADDITIONAL_SERVICES: {
	id: 'impression' | 'theme-group'
	icon: AppDTO.IconName
	title: string
	desc: string
	price: string
}[] = [
	{
		id: 'impression',
		icon: 'faHandBackFist',
		title: '邻里印象',
		desc: '经过严格审核后开通，展示您在邻里中的良好印象',
		price: '免费申请'
	},
	{
		id: 'theme-group',
		icon: 'faComment',
		title: '主题群服务',
		desc: '进入特定微信群，名片分享和抢红包，拓展社交圈',
		price: '¥98/次'
	}
]

export default function Home() {
	const isMobile = useIsMobile()

	// 移动端立即体验按钮
	const [showMobileCTA, setShowMobileCTA] = useState(false)

	const handleScroll = useDebounce(() => {
		setShowMobileCTA(window.scrollY > 300)
	})

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
		// eslint-disable-next-line
	}, [])

	const mpPathURLHomeClick = generateMpPathURL('home', 'click')

	return (
		<PageContainer header={{ links: HOME_NAV_LINKS }}>
			{/* banner */}
			<section className="banner-section text-white relative overflow-hidden bg-linear-135 from-[#8B5CF6] to-[#6D28D9]">
				<div
					className={clsx('top-0 left-0 banner-pattern absolute size-full')}
				></div>

				<div className="px-5 py-24 relative z-10 container mx-auto">
					<div className="lg:grid-cols-2 gap-12 grid grid-cols-1 items-center">
						<div className="lg:text-left text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-5">
								邻里社交，传递善意
							</h2>
							<p className="text-lg mb-8">
								Nextdoor
								是专为邻里设计的微信小程序社交平台，让您与「邻居」建立联系，交换资源，获取本地最鲜活的资讯，获得帮助。
							</p>
						</div>
						<div className="rounded-xl p-8 flex flex-col items-center border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.15)] text-center">
							<div className="bg-white w-48 h-48 rounded-lg p-4 shadow-lg mb-5">
								<div className="bg-gray-100 rounded flex size-full animate-plus items-center justify-center">
									<AppImage
										src="/imgs/mp_code_430x430.jpg"
										width={430}
										height={430}
										loading="eager"
									/>
								</div>
							</div>
							<div className="text-white">
								<h3 className="text-xl font-semibold mb-2">
									扫码体验 nextdoor
								</h3>
								<p className="text-white/90">
									使用微信扫一扫，立即体验邻里社交小程序
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 核心功能 */}
			<section className="feature-section py-20 bg-gray-50" id="discover">
				<div className="px-5 container mx-auto">
					<div className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">发现</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							探索 Nextdoor 如何帮助您与邻居建立联系，解决生活问题
						</p>
					</div>
					<div className="md:grid-cols-2 lg:grid-cols-4 gap-6 grid grid-cols-1">
						{FEATURES.map(({ icon, title, desc }, idx) => {
							return (
								<div
									key={idx}
									className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 text-center transition-all"
								>
									<div className="bg-primary-10 w-16 h-16 mb-5 mx-auto flex items-center justify-center rounded-full">
										<Icon name={icon} className="text-purple-600 text-xl" />
									</div>
									<h3 className="text-xl font-semibold mb-3">{title}</h3>
									<p className="text-gray-600">{desc}</p>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* 会员服务 */}
			<section className="vip-section py-20 bg-white" id="vip">
				<div className="px-4 container mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
						会员服务
					</h2>
					<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
						选择适合您的会员服务，享受更多邻里社交特权
					</p>

					<div className="md:grid-cols-2 gap-8 max-w-4xl mx-auto grid grid-cols-1">
						{MEMBERS.map(({ id, title, price, period, benefits }, idx) => {
							const isMonthVip = id === 'month-vip'

							return (
								<div
									className={clsx(
										'membership-card rounded-2xl bg-white shadow-md flex flex-col',
										'overflow-hidden',
										'ease-liner transition-all duration-300',
										'hover:-translate-y-1 hover:shadow-xl',
										{
											'relative border-2 border-[#8B5CF6]': isMonthVip
										}
									)}
									key={idx}
								>
									{isMonthVip && (
										<div className="text-white font-semibold absolute top-[4px] right-[-22px] rotate-45 bg-[#8B5CF6] px-[30px] py-[5px] text-center text-[12px]">
											推荐
										</div>
									)}

									<div className="membership-header text-white p-5 bg-linear-135 from-[#8B5CF6] to-[#6D28D9] text-center">
										<h3 className="text-xl font-semibold">{title}</h3>
										<div className="membership-price font-bold my-4 text-[2.5rem]">
											￥{price}
										</div>
										<div className="membership-period text-[0.9rem] opacity-80">
											{period}
										</div>
									</div>

									{/* 权益 */}
									<div className="membership-FEATURES p-5 flex-grow">
										{benefits.map((txt, bIdx) => {
											return (
												<div
													className="membership-feature align-center mb-2 flex"
													key={bIdx}
												>
													<Icon
														name="faCheckCircle"
														className="mr-2 mt-1 text-[#8B5CF6]"
													/>
													<span>{txt}</span>
												</div>
											)
										})}
									</div>

									{isMonthVip && (
										<div className="p-4 border-gray-100 border-t">
											<AppButton
												type="primary"
												size="sm"
												className="w-full"
												href="/"
											>
												了解详情
											</AppButton>
										</div>
									)}
								</div>
							)
						})}
					</div>

					{/* 查看更多会员服务链接 */}
					<div className="mt-12 text-center">
						<AppButton type="link" href={PAGE_PATHS['member']}>
							<span>查看更多会员服务详情</span>
							<Icon name="faArrowRight" className="ml-2"></Icon>
						</AppButton>
					</div>
				</div>
			</section>

			{/* 附加服务 */}
			<section className="additional-section bg-gray-50 py-20" id="additional">
				<div className="px-5 container mx-auto">
					<div className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">附加服务</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							更多增值服务，提升您的邻里社交体验
						</p>
					</div>
					<div className="md:grid-cols-2 gap-8 max-w-4xl mx-auto grid grid-cols-1">
						{ADDITIONAL_SERVICES.map(({ id, icon, title, desc, price }) => {
							const isImpression = id === 'impression'

							return (
								<div
									key={id}
									className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg flex flex-col items-center text-center transition-all"
								>
									<div className="bg-primary-10 w-14 h-14 mb-5 flex items-center justify-center rounded-full">
										<Icon name={icon} className="text-purple-600 text-xl" />
									</div>
									<h3 className="text-xl font-semibold mb-3">{title}</h3>
									<p className="text-gray-600 mb-5">{desc}</p>
									{isImpression ? (
										<AppButton
											type="link"
											href={OUTER_LINKS['neighborhoodImpressionIntro']}
										>
											{price}
										</AppButton>
									) : (
										<div className="text-purple-600 text-lg font-bold flex min-h-[48px] items-center">
											{price}
										</div>
									)}
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{isMobile && (
				<div
					className={clsx(
						'mobile-cta z-nav bottom-0 left-0 px-4 py-3 shadow-inner md:hidden bg-white fixed w-full text-center transition-all duration-400',
						showMobileCTA ? 'opacity-100' : 'opacity-0'
					)}
				>
					<AppButton
						href={mpPathURLHomeClick}
						type="primary"
						icon="faWeixin"
						className="mx-auto w-full"
					>
						立即体验小程序
					</AppButton>
				</div>
			)}
		</PageContainer>
	)
}
