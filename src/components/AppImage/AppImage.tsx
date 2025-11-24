import clsx from 'clsx'

import React from 'react'

import Image from 'next/image'

import type { AppImageProps } from './interface'

const AppImage: React.FC<AppImageProps> = props => {
	const { className, alt = '', ...imageProps } = props

	return (
		<Image
			className={clsx('app-image size-full', className)}
			loading="lazy"
			alt={alt}
			{...imageProps}
		/>
	)
}

export default AppImage
