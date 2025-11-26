'use client'

import clsx from 'clsx'

import { Icon } from '@/components'
import AppButton from '@/components/AppButton'
import { PAGE_PATHS } from '@/constants/path'

import FreeMemberSection from './components/FreeMemberSection'
import MonthlyMemberSection from './components/MonthlyMemberSection'
import NeighborhoodImpressionSection from './components/NeighborhoodImpressionSection'
import PartnerMemberSection from './components/PartnerMemberSection'
import VipMemberSection from './components/VipMemberSection'
import styles from './member.module.scss'

const BENEFITS: {
	icon: AppDTO.IconName
	title: string
	desc: string
}[] = [
	{
		icon: 'faUsers',
		title: '精准人脉对接',
		desc: '每天协助对接一位会员'
	},
	{
		icon: 'faBell',
		title: '商机提醒',
		desc: '第一时间获取匹配机会'
	},
	{
		icon: 'faChartLine',
		title: '增长指导',
		desc: '学习互联网方法论'
	}
]

const MEMBER_INTROS = [
	'连接精准人脉',
	'获取专属资源',
	'享受优先服务',
	'参加线下沙龙'
]

const MEMBERSHIP_TYPES: {
	icon: AppDTO.IconName
	id: 'free' | 'impression' | 'monthly' | 'vip' | 'partner'
	name: string
	price: string
	desc: string
}[] = [
	{
		icon: 'faUserFriends',
		id: 'free',
		name: '免费会员',
		price: '注册就送',
		desc: '基础功能完全免费，体验邻里社交'
	},
	{
		icon: 'faHandBackFist',
		id: 'impression',
		name: '邻里印象',
		price: '免费',
		desc: '严格审核，建立真实邻里信任'
	},
	{
		icon: 'faCrown',
		id: 'monthly',
		name: '月卡会员',
		price: '¥30/月',
		desc: '全方位邻里社交增值服务'
	},
	{
		icon: 'faGem',
		id: 'vip',
		name: 'VIP会员',
		price: '¥648',
		desc: '一次性消费，尊享多重特权'
	},
	{
		icon: 'faHandshake',
		id: 'partner',
		name: '合作伙伴',
		price: '面谈',
		desc: '共建邻里生态，一年后全额返还'
	}
]

/**
 * 会员
 */
export default function Member() {
	return (
		<>
			<section
				className={clsx(
					'banner',
					'bg-linear-135 from-[#8B5CF6] to-[#6D28D9]',
					'text-white relative overflow-hidden'
				)}
			>
				<div
					className={clsx('banner-pattern top-0 left-0 absolute size-full')}
				/>

				{/* 浮动元素 */}
				<div className="md:block top-0 left-0 absolute hidden h-full w-full">
					<div className="top-10 right-10 w-20 h-20 bg-white floating-element absolute rounded-full opacity-10"></div>
					<div className="bottom-20 left-10 w-16 h-16 bg-white floating-element absolute rounded-full opacity-10 delay-20"></div>
					<div className="top-40 w-24 h-24 bg-white floating-element absolute left-1/4 rounded-full opacity-10 delay-40"></div>
				</div>

				<div className="px-4 py-16 md:py-24 container mx-auto">
					<div className="hero-content lg:flex-row relative z-[10] flex flex-col items-center justify-between">
						<div className="lg:w-1/2 mb-10 lg:mb-0 lg:text-left stagger-animation text-center">
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
								解锁邻里社交
								<br />
								无限可能
							</h1>
							<p className="text-xl md:text-2xl mb-8 opacity-90">
								加入Nextdoor会员，连接更多资源，创造更大价值
							</p>

							<div className="sm:flex-row lg:justify-start gap-4 flex flex-col justify-center">
								<a
									href="#monthly"
									className={clsx(
										styles['pulse-animation'],
										'bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors'
									)}
								>
									<Icon name="faCrown" className="mr-2"></Icon>
									立即加入会员
								</a>
								<a
									href="#free"
									className="border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-opacity-10 flex items-center justify-center border-2 bg-transparent transition-colors"
								>
									<Icon name="faInfoCircle" className="mr-2"></Icon>
									了解更多
								</a>
							</div>

							<div className="mt-10 gap-4 grid grid-cols-2">
								{MEMBER_INTROS.map((txt, idx) => {
									return (
										<div key={idx} className="flex items-center">
											<Icon
												name="faCheckCircle"
												className="text-green-300 mr-2"
											/>
											<span>{txt}</span>
										</div>
									)
								})}
							</div>
						</div>

						<div className="lg:w-2/5 w-full">
							<div
								className={clsx(
									'membership-card stagger-animation',
									'backdrop-blur-10 rounded-4xl p-6 shadow-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.15)]'
								)}
							>
								<div className="mb-6 text-center">
									<div className="w-16 h-16 bg-white mb-4 mx-auto flex items-center justify-center rounded-full">
										<Icon name="faCrown" className="text-purple-600 text-2xl" />
									</div>
									<h3 className="text-2xl font-bold">月卡会员</h3>
									<div className="text-3xl font-bold mt-2">
										¥30<span className="text-lg font-normal">/月</span>
									</div>
									<p className="text-sm mt-2 opacity-80">
										最适合大多数邻居的选择
									</p>
								</div>

								<div className="space-y-4 mb-6">
									{BENEFITS.map(({ icon, title, desc }, idx) => {
										return (
											<div
												className="benefit-item mb-4 flex items-center"
												key={idx}
											>
												<div
													className={clsx(
														'benefit-icon',
														'size-[40px] rounded-full bg-[rgba(255,255,255,0.2)]',
														'mr-4 flex shrink-0 items-center justify-center'
													)}
												>
													<Icon name={icon} className="text-white" />
												</div>
												<div>
													<p className="font-medium">{title}</p>
													<p className="text-sm opacity-80">{desc}</p>
												</div>
											</div>
										)
									})}
								</div>

								<a
									href="#monthly"
									className="bg-white text-purple-600 font-semibold py-3 rounded-lg hover:bg-gray-100 block w-full text-center transition-colors"
								>
									查看全部权益
								</a>
							</div>
						</div>
					</div>

					{/* 会员类型概览 */}
					<div className="mt-16">
						<h3 className="text-2xl font-bold mb-6 text-center">
							选择适合您的会员类型
						</h3>
						<div
							className={clsx(
								styles['membership-overview'],
								'py-5 gap-4 lg:grid-cols-5 grid grid-cols-2'
							)}
						>
							{MEMBERSHIP_TYPES.map(({ id, icon, name, price, desc }, idx) => {
								const isMonthly = id === 'monthly'
								return (
									<div
										key={idx}
										className={clsx(
											'membership-type',
											'm-w-[160px] p-5 rounded-xl relative border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] text-center transition-all',
											'hover:bg-rgba(255,255,255,0.2) hover:-translate-y-[5px]',
											{
												'border-[2px] border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.2)]':
													isMonthly
											}
										)}
									>
										{isMonthly && (
											<div
												className={clsx(
													'membership-badge',
													'text-white text-xs py-1 px-2 rounded-lg absolute top-[10px] right-[10px] z-[10] bg-[#F59E0B]'
												)}
											>
												最受欢迎
											</div>
										)}

										<div
											className={clsx(
												'membership-icon',
												'mb-4 mx-auto flex size-[50px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.2)]'
											)}
										>
											<Icon name={icon} className="text-white" />
										</div>
										<h4 className="font-bold text-lg">{name}</h4>
										<div className="membership-price text-2xl font-bold my-2">
											{price}
										</div>
										<p className="membership-desc text-sm mb-4 min-h-[40px] opacity-90">
											{desc}
										</p>
										<a
											href={`#${id}`}
											className={clsx(
												'text-sm py-2 px-4 rounded-lg inline-block transition-colors',
												isMonthly
													? 'text-purple-600 bg-white hover:bg-[rgba(255,255,255,0.9)]'
													: 'text-white bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)]'
											)}
										>
											{isMonthly ? '立即加入' : '了解详情'}
										</a>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</section>

			{/* 免费会员 */}
			<FreeMemberSection />

			{/* 邻里印象服务 */}
			<NeighborhoodImpressionSection />

			{/* 月卡会员 */}
			<MonthlyMemberSection />

			{/* VIP会员 */}
			<VipMemberSection />

			{/* 合作伙伴会员 */}
			<PartnerMemberSection />

			{/* 简洁版联系我们 */}
			<section
				id="contact"
				className="simple-contact text-white py-14 bg-linear-135 from-[#8B5CF6] to-[#6D28D9]"
			>
				<div className="px-4 container mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						需要帮助开通会员？
					</h2>
					<p className="text-xl mb-5 text-center opacity-90">
						我们的客服团队随时为您提供支持
					</p>
					<AppButton
						type="link"
						href={PAGE_PATHS['contact']}
						className={clsx(
							'contact-link',
							'bg-white py-3 px-8 font-semibold shadow-md inline-block rounded-full text-[#8B5CF6] transition-all',
							'hover:shadow-lg hover:-translate-y-[3px]'
						)}
					>
						<Icon name="faComments" className="mr-2" /> 立即联系我们
					</AppButton>
				</div>
			</section>
		</>
	)
}
