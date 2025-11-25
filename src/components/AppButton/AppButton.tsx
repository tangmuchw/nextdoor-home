'use client'

import clsx from 'clsx'

import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from '../Icon'

import type { AppButtonProps } from './interface'

const appBasicButtonClass = clsx(
	'app-button',
	'min-h-[44px] min-w-[44px]',
	'ease-liner transition-all duration-300',
	'font-semibold inline-block overflow-hidden',
	'border-none whitespace-nowrap no-underline outline-hidden select-none'
)

const appTextButtonClass = clsx('rounded-[30px]')

const appIconButtonClass = clsx('rounded-full')

const typeClasses = {
	primary:
		'bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium',
	default: 'text-black shadow-md border border-solid border-[#ffb56b]',
	text: '',
	link: 'inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors',
	'linear-orange':
		'bg-linear-to-br from-[#ff8d6b] to-[#ff6b6b] text-[#fff] shadow-md'
}

const sizeClasses = {
	sm: 'px-4 py-2 text-sm',
	md: 'px-6 py-3 text-base',
	lg: 'px-8 py-4 text-lg'
}

const spaceClasses = {
	sm: 'pl-2',
	md: 'pl-3',
	lg: 'pl-4'
}

const hoverClass = 'hover:opacity-90 hover:shadow-lg'
const disabledClass = 'opacity-60 cursor-not-allowed shadow-none transform-none'
const pointerClass = 'hover:cursor-pointer'

const AppButton: React.FC<PropsWithChildren<AppButtonProps>> = props => {
	const {
		className,
		iconClassName,
		icon,
		type = 'default',
		disabled = false,
		hoverAnimate = true,
		loading = false,
		size = 'md',
		children,
		href,
		onClick
	} = props

	const handleClick = () => {
		if (href) return

		onClick?.()
	}

	const isOnlyIconBtn = icon && !children

	const isText = type === 'text'
	const isLink = type === 'link'

	const notAllowed = disabled || loading
	const canActiveHover = !notAllowed && hoverAnimate && !isText && !isLink
	const btnClass = isOnlyIconBtn
		? appIconButtonClass
		: clsx(appTextButtonClass, sizeClasses[size])

	return (
		<button
			className={clsx(
				appBasicButtonClass,
				btnClass,
				typeClasses[type],
				{
					[pointerClass]: !notAllowed,
					[disabledClass]: notAllowed,
					[hoverClass]: canActiveHover
				},
				'relative',
				className
			)}
			onClick={handleClick}
		>
			{href && (
				<a
					className="top-0 left-0 absolute size-full"
					href={href}
					target="_blank"
					rel="nofollow noopener"
				/>
			)}
			<div className="b-bear-button-content flex items-center justify-center">
				{!loading && icon && <Icon name={icon} className={iconClassName} />}
				{loading && (
					<Icon
						className={clsx(
							'-translate-x-1 origin-center animate-rotate',
							iconClassName
						)}
						name="faSpinner"
					/>
				)}
				{children && (
					<div
						className={clsx('b-bear-button__text', {
							[spaceClasses[size]]: icon
						})}
					>
						{children}
					</div>
				)}
			</div>
		</button>
	)
}

export default AppButton
