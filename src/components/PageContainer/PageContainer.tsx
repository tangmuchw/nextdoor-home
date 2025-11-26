'use client'

import clsx from 'clsx'

import type { PropsWithChildren } from 'react'
import React, { useEffect, useRef, useState } from 'react'

import useDebounce from '@/hooks/useDebounce'

import NDButton from '../AppButton'
import Footer from '../Footer'
import Header from '../Header'

import type { PageContainerProps } from './interface'

const PageContainer: React.FC<PropsWithChildren<PageContainerProps>> = ({
	className,
	children,
	showHeader = true,
	showFooter = true,
	showScrollTopBtn = false,
	autoScrollTop = false,
	header: headerProps,
	footer: footerProps
}) => {
	const screenHeightRef = useRef<number>(0)
	const [visibleScrollTopBtn, setVisibleScrollTopBtn] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const listenScroll = useDebounce(() => {
		const visible = window.pageYOffset > 1.2 * screenHeightRef.current
		setVisibleScrollTopBtn(visible)
	})

	const resizeScreenHeight = () => {
		screenHeightRef.current = window.innerHeight
	}

	const listenResize = useDebounce(() => {
		resizeScreenHeight()
	})

	useEffect(() => {
		resizeScreenHeight()

		if (showScrollTopBtn) {
			window.addEventListener('scroll', listenScroll)
		}

		if (autoScrollTop) {
			scrollToTop()
		}

		window.addEventListener('resize', listenResize)

		return () => {
			if (showScrollTopBtn) {
				window.removeEventListener('scroll', listenScroll)
			}

			window.removeEventListener('resize', listenResize)
		}
		// eslint-disable-next-line
	}, [])

	return (
		<div
			className={clsx(
				'page-container min-w-xs relative box-border w-full',
				className,
				{
					'pt-16': showHeader
				}
			)}
		>
			{/* 头部 */}
			{showHeader && <Header {...headerProps} />}

			{/* 正文 */}
			<main className="page-container-content relative">{children}</main>

			{/* 底部 */}
			{showFooter && <Footer {...footerProps} />}

			{showScrollTopBtn && (
				<div
					className={clsx(
						'fixed-scroll-top-btn',
						'z-index-sticky right-8 bottom-8 fixed',
						'apply-transition',
						visibleScrollTopBtn
							? 'translate-y-0 opacity-100'
							: 'translate-y-5 opacity-0'
					)}
				>
					<NDButton type="primary" icon="faArrowUp" onClick={scrollToTop} />
				</div>
			)}
		</div>
	)
}

export default PageContainer
