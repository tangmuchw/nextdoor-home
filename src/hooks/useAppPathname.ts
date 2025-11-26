'use client'

import { usePathname } from 'next/navigation'

import { PAGE_PATHS } from '@/constants/path'

function useAppPathname() {
	const pathname = usePathname()

	const isHome = pathname === PAGE_PATHS['home']
	const isAbout = pathname === PAGE_PATHS['about']
	const isNotFound = !Object.values(PAGE_PATHS).includes(pathname)

	return {
		isHome,
		isAbout,
		isNotFound
	}
}

export default useAppPathname
