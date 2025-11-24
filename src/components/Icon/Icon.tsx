'use client'

import clsx from 'clsx'

import React from 'react'

import { UsedFontAwesomeIcon } from '@/utils/fontawesome-setup'

import type { IconProps } from './interface'

const Icon: React.FC<IconProps> = props => {
	const { className, name, size } = props

	return (
		<div className={clsx('icon inline-block', size, className)}>
			<UsedFontAwesomeIcon icon={name} />
		</div>
	)
}

export default Icon
