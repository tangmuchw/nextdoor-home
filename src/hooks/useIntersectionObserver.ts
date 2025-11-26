import { useEffect, useRef, useState } from 'react'

export const useIntersectionObserver = (options = {}) => {
	const [isIntersecting, setIsIntersecting] = useState(false)
	const elementRef = useRef(null)

	useEffect(() => {
		const element = elementRef.current
		if (!element) return

		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				// 当目标元素进入视口
				if (entry.isIntersecting) {
					setIsIntersecting(true)
					// 在触发一次后取消观察
					observer.unobserve(element)
				}
			})
		}, options)

		observer.observe(element)

		return () => {
			observer.unobserve(element)
		}
	}, [options])

	// 返回 ref 和是否相交的状态
	return [elementRef, isIntersecting]
}
