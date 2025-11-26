'use client'

import clsx from 'clsx'

import React, { PropsWithChildren } from 'react'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

import type { AnimatedProps } from './interface'

const Animated: React.FC<PropsWithChildren<AnimatedProps>> = props => {
	const { className, children } = props

	const [elementRef, isIntersecting] = useIntersectionObserver({
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	})

	return (
		<div
			ref={elementRef as React.RefObject<null>}
			className={clsx(
				'animated ease-liner transition duration-600',
				isIntersecting
					? 'translate-y-0 opacity-100' // 进入视口时的样式
					: 'translate-y-8 opacity-0', // 初始状态（不可见，位于下方）
				className
			)}
		>
			{children}
		</div>
	)
}

export default Animated
