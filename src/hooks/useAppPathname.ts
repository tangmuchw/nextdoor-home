'use client'

import { usePathname } from 'next/navigation'

import { PATH_NAME_GUIDANCE } from '@/constants/path'

function useAppPathname() {
	const pathname = usePathname()

	const isHome = pathname === PATH_NAME_GUIDANCE['home']
	const isAbout = pathname === PATH_NAME_GUIDANCE['about']
	const isNotFound = !Object.values(PATH_NAME_GUIDANCE).includes(pathname)

	return {
		isHome,
		isAbout,
		isNotFound
	}
}

export default useAppPathname
