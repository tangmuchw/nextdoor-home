'use client'

import clsx from 'clsx'

import React from 'react'
import type { PropsWithChildren } from 'react'

import type { AppSectionProps } from './interface'

const AppSection: React.FC<PropsWithChildren<AppSectionProps>> = props => {
	const { className, children, title, id, mb = true } = props

	return (
		<div
			className={clsx(
				'b-bear-section',
				{
					'mb-24': mb
				},
				className
			)}
			id={id}
		>
			{title && (
				<h2
					className={clsx(
						'section-title',
						'text-primary relative mb-14 pb-6 text-center text-3xl font-extrabold md:text-4xl',
						'after:bg-linear-to-r after:absolute after:bottom-0 after:left-[50%] after:h-[6px] after:w-[100px] after:translate-x-[-50%] after:rounded-sm after:from-[#ffb88c] after:to-[#ff8d6b]'
					)}
				>
					{title}
				</h2>
			)}
			<div className="section-content">{children}</div>
		</div>
	)
}

export default AppSection
