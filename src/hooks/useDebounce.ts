'use client'

import { useCallback, useRef } from 'react'

export default function useDebounce<T extends (...args: any[]) => void>(
	func: T,
	delay: number = 300,
	immediate: boolean = true
): T {
	const timerRef = useRef<NodeJS.Timeout | null>(null)
	const immediateRef = useRef(immediate)

	const debouncedFn = useCallback(
		(...args: Parameters<T>) => {
			if (timerRef.current) {
				clearTimeout(timerRef.current)
			}

			if (immediateRef.current) {
				immediateRef.current = false
				func(...args)
			} else {
				timerRef.current = setTimeout(() => {
					func(...args)
				}, delay)
			}
		},

		[func, delay]
	)

	return debouncedFn as T
}
