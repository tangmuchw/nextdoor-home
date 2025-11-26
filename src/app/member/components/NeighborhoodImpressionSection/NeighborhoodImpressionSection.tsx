'use client'

import clsx from 'clsx'

import React from 'react'

import { AppButton, Icon } from '@/components'
import { OUTER_LINKS } from '@/constants/links'
import { PAGE_PATHS } from '@/constants/path'

import { NEIGHBORHOOD_IMPRESSION_RULES } from './config'
import type { NeighborhoodImpressionSectionProps } from './interface'

const NeighborhoodImpressionSection: React.FC<
	NeighborhoodImpressionSectionProps
> = props => {
	const { className } = props

	return (
		<section id="impression" className={clsx('py-20 bg-white', className)}>
			<div className="px-4 container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
					邻里印象服务
				</h2>
				<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
					免费会员和月卡会员均可申请开通（需严格审查）
				</p>

				<div
					className={clsx(
						'service-card',
						'bg-white rounded-lg p-6 shadow-md border border-[#f0f0f0] transition-all',
						'hover:shadow-lg hover:-translate-y-[5px]',
						'max-w-3xl mx-auto'
					)}
				>
					<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
						<Icon name="faHandBackFist" className="text-purple-600 text-xl" />
					</div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">
						开通邻里印象
					</h3>
					<p className="text-gray-600 mb-4">
						通过真实互动建立信任，传递邻里善意
					</p>

					<div className="space-y-4">
						{NEIGHBORHOOD_IMPRESSION_RULES.map(({ title, desc }, idx) => {
							return (
								<div key={idx} className="flex items-start">
									<Icon
										name="faCheckCircle"
										className="text-green-500 mt-1 mr-2"
									/>
									<div>
										<p className="text-gray-600 font-medium">{title}</p>
										<p className="text-gray-500 text-sm">{desc}</p>
									</div>
								</div>
							)
						})}
					</div>

					<div className="mt-6 pt-6 border-gray-200 border-t">
						<p className="text-gray-600">
							所有「邻居」都可以留下对您的印象，通过邻里共建加平台监督，更容易判断信息真实性。
						</p>
						<p className="text-gray-600 mt-2">
							例如，如果您自称是钢琴师，其他邻居可以就此留下对这件事的印象。
						</p>
					</div>
				</div>
			</div>

			<div className="mt-12 text-center">
				<AppButton
					type="link"
					href={OUTER_LINKS['neighborhoodImpressionApply']}
				>
					<span>去开通邻里印象认证</span>
					<Icon name="faArrowRight" className="ml-2"></Icon>
				</AppButton>
			</div>
		</section>
	)
}

export default NeighborhoodImpressionSection
