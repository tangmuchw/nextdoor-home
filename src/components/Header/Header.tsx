'use client'

import clsx from 'clsx'

import { useMemo, useState } from 'react'

import Link from 'next/link'

import { PAGE_PATHS } from '@/constants/path'
import useAppPathname from '@/hooks/useAppPathname'
import useIsMobile from '@/hooks/useIsMobile'
import { disablePageScroll, enablePageScroll } from '@/utils/methods'
import { generateMpPathURL } from '@/utils/wx'

import AppButton from '../AppButton'
import Icon from '../Icon'

import type { HeaderProps } from './interface'

const Header: React.FC<HeaderProps> = props => {
	const isMobile = useIsMobile()

	const { links } = props

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const closeMobileMenu = () => {
		enablePageScroll()
		setIsMenuOpen(false)
	}

	const openMobileMenu = () => {
		disablePageScroll()
		setIsMenuOpen(true)
	}

	const showNavPC = !isMobile
	const showNavMobile = isMobile && links && links?.length > 0
	const navLinkNum = links ? links.length : 0
	const mpPathURLHomeClick = generateMpPathURL('home', 'click')

	return (
		<>
			<header className="site-header z-nav top-0 right-0 left-0 bg-white shadow-md fixed z-50">
				<div className="site-header-container px-4 py-3 container mx-auto flex items-center justify-between">
					<Link href="/" className="logo flex items-center no-underline">
						<div className="flex items-center">
							<div className="h-10 w-10 bg-purple-600 text-xl text-white flex items-center justify-center rounded-full">
								<Icon name="faHouseChimney" className="-scale-x-100"></Icon>
							</div>
							<span className="ml-2 text-xl font-bold text-gray-800">
								Nextdoor
							</span>
						</div>
					</Link>

					{/* 首页导航 */}
					{showNavPC && (
						<nav className="nav-links gap-6 md:flex md:items-center hidden">
							{links && links.length > 0 ? (
								links.map(({ id, title }) => {
									if (id === 'experience')
										return (
											<AppButton
												key={id}
												href={mpPathURLHomeClick}
												type="primary"
												size="sm"
											>
												{title}
											</AppButton>
										)

									return (
										<Link
											href={`#${id}`}
											key={id}
											className={clsx(
												'nav-link app-link pb-1 text-base font-medium transition-all duration-300'
											)}
										>
											{title}
										</Link>
									)
								})
							) : (
								<Link
									href={PAGE_PATHS['home']}
									className={clsx(
										'nav-link app-link pb-1 text-base font-medium transition-all duration-300'
									)}
								>
									返回首页
								</Link>
							)}
						</nav>
					)}

					{showNavMobile && (
						<button
							className="mobile-menu-btn text-primary z-nav rounded-lg p-2 text-xl border-none bg-transparent transition-all duration-300"
							onClick={openMobileMenu}
						>
							<Icon name="faBars" />
						</button>
					)}
				</div>
			</header>

			{/* 首页-移动端导航菜单 */}
			{showNavMobile && (
				<div
					className={clsx(
						'mobile-nav',
						'shadow-lg h-screen w-full',
						'z-max top-0 left-0 fixed overflow-hidden',
						'transition-all duration-400 ease-in-nav',
						'bg-white',
						isMenuOpen
							? 'translate-y-0 visible animate-slide-in opacity-100'
							: 'invisible -translate-y-full animate-slide-out opacity-0'
					)}
				>
					<div className="px-5 py-4 flex h-[70px] w-full items-center justify-end">
						<button
							className="mobile-menu-btn text-primary rounded-lg p-2 text-xl border-none bg-transparent transition-all duration-300"
							onClick={closeMobileMenu}
						>
							<Icon name="faXmark" />
						</button>
					</div>
					<nav className="nav-menus gap-4 p-5 flex max-h-[calc(100vh-64px)] w-full flex-col overflow-y-auto">
						{links &&
							links.map(({ id, title }, idx) => {
								const href = id === 'experience' ? mpPathURLHomeClick : `#${id}`

								return (
									<Link
										key={id}
										href={href}
										className={clsx(
											'mobile-nav-link',
											'text-black rounded-lg px-4 py-3 font-medium text-xl',
											isMenuOpen
												? `translate-y-0 animate-fade-in opacity-100 animate-delay-${(idx + 1) * 100}`
												: `-translate-y-3 animate-fade-out opacity-0 animate-delay-${(navLinkNum - idx) * 100}`
										)}
										onClick={closeMobileMenu}
									>
										{title}
									</Link>
								)
							})}
					</nav>
				</div>
			)}
		</>
	)
}

export default Header
