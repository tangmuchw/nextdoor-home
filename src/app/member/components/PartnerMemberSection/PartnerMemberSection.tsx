'use client'

import clsx from 'clsx'

import React from 'react'

import { Icon } from '@/components'

import { PARTNER_DUTIES, PARTNER_RIGHTS } from './config'
import type { PartnerMemberSectionProps } from './interface'

const serviceCardClass = clsx(
	'service-card',
	'bg-white rounded-lg p-6 shadow-md border border-[#f0f0f0] transition-all',
	'hover:shadow-lg hover:-translate-y-[5px]',
	'max-w-3xl mx-auto'
)

const PartnerMemberSection: React.FC<PartnerMemberSectionProps> = props => {
	const { className } = props

	return (
		<section id="partner" className={clsx('py-20 bg-gray-50', className)}>
			<div className="px-4 container mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
					合作伙伴会员
				</h2>
				<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
					共建邻里生态，一年后全额返还
				</p>

				<div
					className={clsx(
						serviceCardClass,
						'max-w-4xl stagger-animation mx-auto'
					)}
				>
					<div className="w-14 h-14 bg-purple-100 mb-4 flex items-center justify-center rounded-full">
						<Icon name="faHandshake" className="text-purple-600 text-xl" />
					</div>
					<h3 className="text-xl font-semibold text-gray-800 mb-3">
						合作伙伴会员
					</h3>
					<p className="text-gray-600 mb-6">
						仅限有资源并认可邻里社交使命的「邻居」
					</p>

					<div className="md:grid-cols-2 gap-8 grid grid-cols-1">
						<div>
							<h4 className="font-semibold text-gray-800 mb-2">适用人群</h4>
							<div className="space-y-2">
								<div className="flex items-center">
									<Icon name="faInfoCircle" className="text-blue-500 mr-2" />
									<p className="text-gray-600">
										仅限有资源（如货源、专业技能、投资资金）的邻居
									</p>
								</div>
								<div className="flex items-center">
									<Icon name="faInfoCircle" className="text-blue-500 mr-2" />
									<p className="text-gray-600">需认可邻里社交使命</p>
								</div>
							</div>

							<h4 className="font-semibold text-gray-800 mt-4 mb-2">
								核心权益
							</h4>
							<div className="space-y-2">
								{PARTNER_RIGHTS.map((txt, idx) => {
									return (
										<div key={idx} className="flex items-center">
											<Icon name="faCheck" className="text-green-500 mr-2" />
											<p className="text-gray-600">{txt}</p>
										</div>
									)
								})}
							</div>
						</div>

						<div>
							<h4 className="font-semibold text-gray-800 mb-2">义务</h4>
							<div className="space-y-2">
								{PARTNER_DUTIES.map((txt, idx) => {
									return (
										<div key={idx} className="flex items-center">
											<Icon
												name="faInfoCircle"
												className="text-green-500 mr-2"
											/>
											<p className="text-gray-600">{txt}</p>
										</div>
									)
								})}
							</div>

							<h4 className="font-semibold text-gray-800 mt-4">返还机制</h4>
							<div className="flex items-center">
								<Icon name="faCheck" className="text-green-500 mr-2" />
								<p className="text-gray-600">
									一年后全额返还，相当于免费享受权益
								</p>
							</div>

							<h4 className="font-semibold text-gray-800 mt-4">费用</h4>
							<div className="flex items-start">
								<Icon name="faDollarSign" className="text-blue-500 mr-2" />
								<p className="text-gray-600">面谈</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PartnerMemberSection
