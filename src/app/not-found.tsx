'use client'

import clsx from 'clsx'

import { PageContainer } from '@/components'

export default function NotFound() {
	return (
		<PageContainer>
			<section className="py-20 text-white flex items-center justify-center bg-linear-135 from-[#8B5CF6] to-[#6D28D9]">
				<div className="text-white px-4 container text-center">
					<div
						className={clsx(
							'error-code',
							'font-extrabold mb-4 relative text-[160px]',
							'before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%]',
							'before:size-[250px] before:rounded-full before:bg-[rgba(255,255,255,0.05)]'
						)}
					>
						404
					</div>

					<h1 className="error-title text-3xl font-semibold mb-4">
						哎呀！页面走丢了
					</h1>

					<p className="error-description text-lg leading-[1.6] opacity-900">
						您要访问的页面可能已被移动、删除或暂时不可用。
					</p>
				</div>
			</section>
		</PageContainer>
	)
}
