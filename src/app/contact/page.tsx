'use client'

import clsx from 'clsx'

import { AppImage, Icon } from '@/components'
import AppButton from '@/components/AppButton'
import { PAGE_PATHS } from '@/constants/path'
import { generateMpPathURL } from '@/utils/wx'

import { CONTACT_METHODS, GH_INFOS } from './config'

const contactCardClass = clsx(
	'contact-card',
	'rounded-lg shadow-lg p-8 backdrop-blur-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.95)]'
)

const contactIconClass = clsx(
	'contact-icon',
	'size-[60px] rounded-full bg-linear-135 from-[#8B5CF6] to-[#6D28D9]',
	'mb-5 text-white text-2xl mx-auto flex items-center justify-center'
)

/**
 * 联系我们
 */
export default function Contact() {
	const mpPathURLHomeClick = generateMpPathURL('home', 'click')

	return (
		<>
			<section
				className={clsx(
					'banner',
					'bg-linear-135 from-[#8B5CF6] to-[#6D28D9]',
					'text-white'
				)}
			>
				{/* 浮动元素 */}
				<div className="md:block top-0 left-0 absolute hidden h-full w-full">
					<div className="top-10 right-10 w-20 h-20 bg-white floating-element absolute rounded-full opacity-10"></div>
					<div className="bottom-20 left-10 w-16 h-16 bg-white floating-element absolute rounded-full opacity-10 delay-20"></div>
					<div className="top-40 w-24 h-24 bg-white floating-element absolute left-1/4 rounded-full opacity-10 delay-40"></div>
				</div>

				<div className="px-4 py-16 md:py-24 container mx-auto">
					<div className="text-center">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							联系我们
						</h1>
						<p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
							有任何问题或需要帮助？我们随时为您提供支持
						</p>
					</div>
				</div>
			</section>

			{/* 联系方式区域 */}
			<section className="py-20 bg-gray-50">
				<div className="px-4 container mx-auto">
					<div className="max-w-4xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
							多种方式联系我们
						</h2>
						<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
							选择最适合您的方式，我们的客服团队将及时为您提供帮助
						</p>

						<div className="md:grid-cols-2 gap-8 grid grid-cols-1">
							{/* 电话联系 */}
							<div className={contactCardClass}>
								<div className={contactIconClass}>
									<Icon name="faPhoneAlt" />
								</div>
								<h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
									电话联系
								</h3>
								<p className="text-gray-600 mb-6 text-center">
									直接拨打我们的客服热线，快速解决问题
								</p>

								{CONTACT_METHODS.map(({ icon, title, desc, tel }, idx) => {
									return (
										<div
											key={idx}
											className={clsx(
												'contact-method',
												'mb-5 p-4 rounded-xl flex items-center bg-[rgba(139,92,246,0.05)]',
												'transition-all hover:-translate-y-[3px] hover:bg-[rgba(139,92,246,0.1)]'
											)}
										>
											<div
												className={clsx(
													'contact-method-icon',
													'mr-4 text-xl flex size-[50px] items-center justify-center rounded-full bg-[rgba(139,92,246,0.1)] text-[#8B5CF6]'
												)}
											>
												<Icon name={icon} />
											</div>
											<div>
												<h4 className="font-semibold text-gray-800">{title}</h4>
												<a
													href={`tel:${tel}`}
													className={clsx(
														'tel-link',
														'text-primary font-semibold text-xl',
														'hover:text-[#6D28D9]'
													)}
												>
													{tel}
												</a>
												<p className="text-sm text-gray-500 mt-1">{desc}</p>
											</div>
										</div>
									)
								})}

								<div className="mt-6 pt-6 border-gray-200 border-t">
									<h4 className="font-semibold text-gray-800 mb-2">温馨提示</h4>
									<ul className="text-sm text-gray-600 space-y-1">
										<li>• 请在工作时间内拨打，非工作时间请留言</li>
										<li>• 为提升服务质量，通话可能会被录音</li>
										<li>• 高峰期如遇占线，请稍后再试或选择其他联系方式</li>
									</ul>
								</div>
							</div>

							{/* 公众号关注 */}
							<div className={contactCardClass}>
								<div className={contactIconClass}>
									<Icon name="faWeixin" />
								</div>
								<h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
									关注公众号
								</h3>
								<p className="text-gray-600 mb-6 text-center">
									扫描二维码关注，获取最新资讯和活动信息
								</p>

								<div
									className={clsx(
										'qr-code',
										'rounded-lg mb-6 bg-white mx-auto size-[150px] overflow-hidden border border-[#e5e7eb]'
									)}
								>
									<div className="bg-gray-100 flex size-full items-center justify-center">
										<AppImage
											src="/imgs/qrcode_for_gh_efe8cfb37afa_344.jpg"
											width={344}
											height={344}
											loading="eager"
										/>
									</div>
								</div>

								<div className="text-center">
									<h4 className="font-semibold text-gray-800 mb-2">
										Nextdoor 邻里社交
									</h4>
									<p className="text-gray-600 mb-4">公众号: 小丑笔记</p>

									<div className="space-y-3 text-left">
										{GH_INFOS.map((txt, idx) => {
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
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 其他联系方式 */}
			<section className="py-20 bg-white">
				<div className="px-4 container mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
						其他联系方式
					</h2>
					<p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
						我们也提供多种其他渠道，方便您随时联系我们
					</p>

					<div className="max-w-4xl md:grid-cols-2 gap-6 mx-auto grid grid-cols-1">
						<div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg text-center transition-shadow">
							<div className="w-16 h-16 bg-purple-100 mb-4 mx-auto flex items-center justify-center rounded-full">
								<Icon name="faEnvelope" className="text-purple-600 text-xl" />
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								邮箱联系
							</h3>
							<p className="text-gray-600 mb-4">
								发送邮件至客服邮箱，我们将在24小时内回复
							</p>
							<AppButton
								href="mailto:81061595@qq.com"
								type="link"
								className="text-purple-600 font-medium"
							>
								81061595@qq.com
							</AppButton>
						</div>

						<div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg text-center transition-shadow">
							<div className="w-16 h-16 bg-purple-100 mb-4 mx-auto flex items-center justify-center rounded-full">
								<Icon name="faComments" className="text-purple-600 text-xl" />
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								在线客服
							</h3>
							<p className="text-gray-600 mb-4">
								登录小程序，使用在线客服功能与我们实时沟通
							</p>
							<AppButton
								href={mpPathURLHomeClick}
								type="link"
								className="text-purple-600 font-medium"
							>
								立即体验小程序
							</AppButton>
						</div>

						{/* <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg text-center transition-shadow">
							<div className="w-16 h-16 bg-purple-100 mb-4 mx-auto flex items-center justify-center rounded-full">
								<i className="fas fa-map-marker-alt text-purple-600 text-xl"></i>
							</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">
								线下服务中心
							</h3>
							<p className="text-gray-600 mb-4">
								前往我们的线下服务中心，面对面解决问题
							</p>
							<a href="#" className="text-purple-600 font-medium">
								查看地址
							</a>
						</div> */}
					</div>
				</div>
			</section>
		</>
	)
}
