'use client'

import clsx from 'clsx'

import React from 'react'

import type { XxxProps } from './interface'

const Xxx: React.FC<XxxProps> = props => {
	const { className } = props

	return <div className={clsx('xxx', className)}></div>
}

export default Xxx
