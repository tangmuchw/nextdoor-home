'use client'

import clsx from 'clsx'

import { useEffect, useState } from 'react'

import { AppImage, Icon, PageContainer } from '@/components'
import AppButton from '@/components/AppButton'
import useDebounce from '@/hooks/useDebounce'
import useIsMobile from '@/hooks/useIsMobile'
import { generateMpPathURL } from '@/utils/wx'

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

	const features: { icon: AppDTO.IconName; title: string; desc: string }[] = [
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

	const mpPathURLHomeClick = generateMpPathURL('home', 'click')

	return (
		<PageContainer>
			{/* banner */}
			<section className="banner-section text-white relative overflow-hidden bg-linear-135 from-[#8B5CF6] to-[#6D28D9]">
				<div className="hero-pattern inset-0 bg-[url(data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'><path fill='%23ffffff' fill-opacity='0.1' d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path></svg>)] absolute bg-cover bg-bottom"></div>
				<div className="px-5 py-24 relative z-10 container mx-auto">
					<div className="lg:grid-cols-2 gap-12 grid grid-cols-1 items-center">
						<div className="lg:text-left text-center">
							<h2 className="text-4xl md:text-5xl font-bold mb-5">
								邻里社交，传递善意
							</h2>
							<p className="text-lg mb-8">
								Nextdoor
								是专为邻里设计的微信小程序社交平台，让您与「邻居」建立联系，共享资源，共同建设美好社区。
							</p>
						</div>
						<div className="bg-white/15 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center">
							<div className="bg-white w-48 h-48 rounded-lg p-4 shadow-lg mb-5">
								<div className="bg-gray-100 rounded flex h-full w-full animate-plus items-center justify-center">
									<AppImage
										src="/imgs/mp_code_430x430.jpg"
										width={430}
										height={430}
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
			<section className="bg-gray-50 py-20" id="discover">
				<div className="px-5 container mx-auto">
					<div className="mb-12 text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">发现</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							探索 Nextdoor 如何帮助您与邻居建立联系，解决生活问题
						</p>
					</div>
					<div className="md:grid-cols-2 lg:grid-cols-4 gap-6 grid grid-cols-1">
						{features.map(({ icon, title, desc }, idx) => {
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
