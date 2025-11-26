'use client'

import clsx from 'clsx'

import React from 'react'

import { Icon } from '@/components'

import { FREE_BENEFITS, SELF_SERVICES } from './config'
import type { FreeMemberSectionProps } from './interface'

const FreeMemberSection: React.FC<FreeMemberSectionProps> = props => {
	const { className } = props

	return (
		<section id="free" className={clsx('py-20 bg-gray-50', className)}>
			<div className="px-4 container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
					免费会员
				</h2>
				<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
					基础功能完全免费，让每位「邻居」都能享受社区便利
				</p>

				<div className="md:grid-cols-2 gap-8 stagger-animation grid grid-cols-1">
					{FREE_BENEFITS.map(({ icon, title, desc }, idx) => {
						return (
							<div
								key={idx}
								className={clsx(
									'service-card',
									'bg-white rounded-lg p-6 shadow-md border border-[#f0f0f0] transition-all',
									'hover:shadow-lg hover:-translate-y-[5px]'
								)}
							>
								<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
									<Icon name={icon} className="text-purple-600 text-xl" />
								</div>
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									{title}
								</h3>
								<p className="text-gray-600">{desc}</p>
							</div>
						)
					})}
				</div>

				<div className="mt-12 bg-white rounded-xl shadow-lg border-gray-100 p-6 border">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">
						社区经济自营服务
					</h3>
					<p className="text-gray-600 mb-4">
						承诺邻里社交，社区经济自营服务收费，最高永不超过营业额的1%，最低一元。
					</p>
					<div className="md:grid-cols-2 gap-4 grid grid-cols-1">
						{SELF_SERVICES.map((txt, idx) => {
							return (
								<div key={idx} className="flex items-start">
									<Icon name="faCheck" className="text-green-500 mt-1 mr-2" />
									<p className="text-gray-600">{txt}</p>
								</div>
							)
						})}
					</div>
				</div>

				<div className="mt-8 bg-purple-50 rounded-xl border-purple-200 p-6 border">
					<h3 className="text-xl font-semibold text-gray-800 mb-4">附加机会</h3>
					<div className="flex items-center">
						<Icon name="faHandBackFist" className="text-purple-600 mr-2" />
						<p className="text-gray-600">
							可申请开通"邻里印象"服务（严格审核，通过后即可使用）
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FreeMemberSection
