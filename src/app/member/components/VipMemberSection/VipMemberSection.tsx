'use client'

import clsx from 'clsx'

import React from 'react'

import { Icon } from '@/components'

import {
	COOPERATION_MODE_INFOS,
	VIP_MEMBER_BENEFITS,
	VIP_MEMBER_INFOS
} from './config'
import type { VipMemberSectionProps } from './interface'

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

const VipMemberSection: React.FC<VipMemberSectionProps> = props => {
	const { className } = props

	return (
		<section id="vip" className={clsx('py-20 bg-white', className)}>
			<div className="px-4 container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
					VIP会员
				</h2>
				<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
					648元一次性支付，尊享多重特权
				</p>

				<div className="max-w-4xl md:grid-cols-2 gap-8 stagger-animation mx-auto grid grid-cols-1">
					<div className={clsx(serviceCardClass, 'left')}>
						<div className="mb-4 flex items-start justify-between">
							<div className="w-14 h-14 bg-purple-100 flex items-center justify-center rounded-full">
								<Icon name="faGem" className="text-purple-600 text-xl" />
							</div>
							<div className={priceTagClass}>￥648元</div>
						</div>
						<h3 className="text-xl font-semibold text-gray-800 mb-3">
							VIP会员
						</h3>
						<p className="text-gray-600 mb-6">一次性支付，尊享多重特权</p>

						<div className="space-y-3">
							{VIP_MEMBER_BENEFITS.map((txt, idx) => {
								return (
									<div key={idx} className="flex items-start">
										<Icon name="faCheck" className="text-green-500 mt-1 mr-2" />
										<p className="text-gray-600">{txt}</p>
									</div>
								)
							})}
						</div>

						<div className="mt-6 pt-6 border-gray-200 border-t">
							<h4 className="font-semibold text-gray-800 mb-2">重要说明</h4>
							<div className="space-y-2">
								{VIP_MEMBER_INFOS.map((txt, idx) => {
									return (
										<div key={idx} className="flex items-start">
											<Icon
												name="faInfoCircle"
												className="text-blue-500 mr-2"
											/>
											<p className="text-gray-600">{txt}</p>
										</div>
									)
								})}
							</div>
						</div>

						<div className="mt-4 pt-4 border-gray-200 border-t">
							<h4 className="font-semibold text-gray-800 mb-2">附加机会</h4>
							<div className="flex items-start">
								<i className="fas fa-star text-purple-600 mt-1 mr-2"></i>
								<p className="text-gray-600">可申请开通"邻里印象"认证</p>
							</div>
						</div>
					</div>

					<div className="right">
						<div className={serviceCardClass}>
							<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
								<Icon
									name="faProjectDiagram"
									className="text-purple-600 text-xl"
								/>
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								1+N 生态链合作服务
							</h3>
							<p className="text-gray-600 mb-6">共同打造爆款，实现共赢</p>

							<div className="gap-6 grid grid-cols-1">
								<div>
									<h4 className="font-semibold text-gray-800 mb-2">合作模式</h4>
									<div className="space-y-2">
										{COOPERATION_MODE_INFOS.map((txt, idx) => {
											return (
												<div key={idx} className="flex items-center">
													<Icon
														name="faCheck"
														className="text-green-500 mr-2"
													/>
													<p className="text-gray-600">{txt}</p>
												</div>
											)
										})}
									</div>
								</div>
								<div>
									<h4 className="font-semibold text-gray-800 mb-2">平台支持</h4>
									<div className="flex items-center">
										<Icon name="faCheck" className="text-green-500 mr-2" />
										<p className="text-gray-600">我们提供销售渠道和客源</p>
									</div>
								</div>
							</div>
						</div>

						<div className={clsx(serviceCardClass, 'mt-8')}>
							<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
								<Icon name="faStore" className="text-purple-600 text-xl" />
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-3">
								本地生活推荐服务
							</h3>
							<p className="text-gray-600">
								实体店入驻需支付年费，享受平台推广和客源支持
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default VipMemberSection
