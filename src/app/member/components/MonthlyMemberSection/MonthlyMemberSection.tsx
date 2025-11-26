'use client'

import clsx from 'clsx'

import React from 'react'

import { Animated, Icon } from '@/components'

import { MONTHLY_MEMBER_BENEFITS } from './config'
import type { MonthlyMemberSectionProps } from './interface'

const serviceCardClass = clsx(
	'service-card',
	'bg-white rounded-lg p-6 shadow-md border border-[#f0f0f0] transition-all',
	'hover:shadow-lg hover:-translate-y-[5px]',
	'max-w-3xl mx-auto'
)

const priceTagClass = clsx(
	'price-tag',
	'text-white bg-linear-135 from-[#8B5CF6] to-[#6D28D9] text-center',
	'py-2 px-4 font-semibold inline-block rounded-full'
)

const MonthlyMemberSection: React.FC<MonthlyMemberSectionProps> = props => {
	const { className } = props

	return (
		<section id="monthly" className={clsx('py-20 bg-gray-50', className)}>
			<div className="px-4 container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
					月卡会员
				</h2>
				<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
					仅需30元/月，享受全方位邻里社交增值服务
				</p>

				<Animated>
					<div className="max-w-4xl md:grid-cols-2 gap-8 mx-auto grid grid-cols-1">
						<div
							className={clsx(
								'bg-white rounded-lg p-6 shadow-md transition-all',
								'hover:shadow-lg hover:-translate-y-[5px]',
								'max-w-3xl mx-auto',
								'relative overflow-hidden border-2 border-[#F59E0B]'
							)}
						>
							<div className="text-white font-semibold absolute top-[4px] right-[-22px] rotate-45 bg-[#F59E0B] px-[30px] py-[5px] text-center text-[12px]">
								推荐
							</div>

							<div className="mb-4 flex items-start justify-between">
								<div className="w-14 h-14 bg-purple-100 flex items-center justify-center rounded-full">
									<Icon name="faCrown" className="text-purple-600 text-xl" />
								</div>
								<div className={priceTagClass}>￥30元/月</div>
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								月卡会员
							</h3>
							<p className="text-gray-600 mb-6">
								注重实用，核心功能齐全，帮您连接更多邻里资源
							</p>

							<div className="space-y-4">
								{MONTHLY_MEMBER_BENEFITS.map((txt, idx) => {
									return (
										<div key={idx} className="flex items-center">
											<Icon
												name="faCheck"
												className="text-green-500 mt-1 mr-2"
											/>
											<p className="text-gray-600">{txt}</p>
										</div>
									)
								})}
							</div>

							<div className="mt-6 pt-6 border-gray-200 border-t">
								<h4 className="font-semibold text-gray-800 mb-2">附加机会</h4>
								<div className="space-y-3">
									<div className="flex items-start">
										<i className="fas fa-star text-purple-600 mt-1 mr-2"></i>
										<p className="text-gray-600">可申请开通"邻里印象"认证</p>
									</div>
									<div className="flex items-start">
										<i className="fas fa-shopping-cart text-purple-600 mt-1 mr-2"></i>
										<p className="text-gray-600">
											可额外购买"主题群服务"（98元一次），进入特定微信群，名片分享和抢红包
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="space-y-8">
							<div className={serviceCardClass}>
								<div className="mb-4 flex items-start justify-between">
									<div className="w-14 h-14 bg-purple-100 flex items-center justify-center rounded-full">
										<Icon name="faUsers" className="text-purple-600 text-xl" />
									</div>
									<div className={priceTagClass}>￥98元/次</div>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									主题群服务
								</h3>
								<p className="text-gray-600 mb-4">
									加入专属微信群，快速拓展人脉
								</p>

								<div className="space-y-3">
									<div className="flex items-start">
										<Icon name="faCheck" className="text-green-500 mt-1 mr-2" />
										<p className="text-gray-600">
											名片分享到群内，快速建立联系
										</p>
									</div>
									<div className="flex items-start">
										<Icon name="faCheck" className="text-green-500 mt-1 mr-2" />
										<p className="text-gray-600">9.9元红包供群友抢，活跃氛围</p>
									</div>
								</div>
							</div>

							<div className={serviceCardClass}>
								<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
									<Icon
										name="faHandBackFist"
										className="text-purple-600 text-xl"
									/>
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									邻里印象服务
								</h3>
								<p className="text-gray-600 mb-4">
									帮助您快速获得其他邻居的信任
								</p>
								<div className="space-y-3">
									<p className="text-gray-600">
										所有邻居都可以留下对您的印象，通过邻里共建加平台监督，更容易判断信息真实性。
									</p>
									<p className="text-gray-600">
										例如，如果您可以发布「爱吃西瓜、爱打羽毛球、喜撸猫」等，其他邻居可以就此留下对这件事的印象。
									</p>
								</div>
							</div>
						</div>
					</div>
				</Animated>
			</div>
		</section>
	)
}

export default MonthlyMemberSection
