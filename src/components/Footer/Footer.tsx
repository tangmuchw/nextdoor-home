'use client'

import clsx from 'clsx'
import dayjs from 'dayjs'

import React from 'react'

import Link from 'next/link'

import useBBearPathname from '@/hooks/useAppPathname'

import { FOOTER_LINKS } from './config'
import type { FooterProps } from './interface'

const Footer: React.FC<FooterProps> = () => {
	const { isAbout, isNotFound } = useBBearPathname()
	// 移动端立即体验按钮

	const currentYear = dayjs().format('YYYY')
	const showFooterLinks = !isNotFound && !isAbout

	return (
		<footer
			className={clsx(
				'site-footer bg-gray-800 text-white pt-12 pb-24 md:pb-12'
			)}
		>
			<div className="footer-content px-4 container mx-auto">
				<div className="footer-nav-list md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 md:gap-10 grid grid-cols-1">
					{FOOTER_LINKS.map(({ title, links }, idx) => {
						return (
							<div className="footer-column" key={idx}>
								<h3
									className={clsx(
										'text-lg font-semibold mb-5 pb-2.5 relative',
										'after:left-0 after:bottom-0 after:absolute after:h-[2px] after:w-[40px] after:bg-[rgb(138,43,226)]'
									)}
								>
									{title}
								</h3>
								<ul className="footer-links space-y-2.5">
									{links.map(({ href, text }, liIdx) => {
										return (
											<li
												key={`${idx}_${liIdx}`}
												className="text-gray-400 hover:text-white transition-colors duration-300"
											>
												<a href={href}>{text}</a>
											</li>
										)
									})}
								</ul>
							</div>
						)
					})}
				</div>
				<div className="border-gray-700 mt-8 pt-8 text-gray-400 text-sm border-t text-center">
					<p className="copyright text-secondary mt-5 mb-1">
						{`Copyright © ${currentYear} 徐州璇源科技有限公司版权所有`}
					</p>
					<Link
						className="icp-link mt-2 text-secondary font-normal no-underline hover:underline hover:opacity-80"
						href="https://beian.miit.gov.cn"
						rel="noopener noreferrer"
						target="_blank"
					>
						苏 ICP 备 16065903 号 - 1
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
