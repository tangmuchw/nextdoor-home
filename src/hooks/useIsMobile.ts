'use client'

import { useEffect, useState } from 'react'

function useIsMobile() {
	const [isMobile, setIsMobile] = useState(false)

	const isMobileDevice = () => {
		// UA 检测
		const isMobileUA =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)

		// 屏幕宽度检测（阈值通常为 768px，常见平板的最大宽度）
		const isSmallScreen = window.innerWidth <= 1024

		// 触摸屏支持检测
		const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0

		return (isMobileUA && hasTouch) || (isSmallScreen && hasTouch)
	}

	useEffect(() => {
		// 只在客户端执行
		setIsMobile(isMobileDevice())
	}, [])

	return isMobile
}

export default useIsMobile
