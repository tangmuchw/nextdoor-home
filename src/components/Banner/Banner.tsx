'use client'

import clsx from 'clsx'

import React, { PropsWithChildren } from 'react'

import styles from './banner.module.scss'
import type { BannerProps } from './interface'

const Banner: React.FC<PropsWithChildren<BannerProps>> = props => {
	const { className, children } = props

	return (
		<section
			className={clsx(
				'banner-section',
				'text-white relative overflow-hidden bg-linear-135 from-[#8B5CF6] to-[#6D28D9]',
				className
			)}
		>
			<div
				className={clsx(
					styles['banner-pattern'],
					'top-0 left-0 absolute size-full'
				)}
			/>

			{children}
		</section>
	)
}

export default Banner
