const NEXTDOOR_WE_XIN_MP_PAGE_PATHS = {
	home: 'pages/splash/index'
}

/**
 * @description 生成 跳转至 小程序 的 path url
 */
export const generateMpPathURL = (
	pathName: 'home',
	trigger: 'click' | 'scan',
	params?: Record<string, string>
) => {
	const pathParams = params
		? Object.entries(params).reduce(
				(a, [k, v], idx, arr) =>
					`${a}${k}=${v}${idx !== arr.length - 1 ? '&' : ''}`,
				''
			)
		: ''

	switch (trigger) {
		case 'click': {
			const appId = process.env.NEXT_PUBLIC_NEXTDOOR_WEIXIN_APP_ID
			const path = NEXTDOOR_WE_XIN_MP_PAGE_PATHS[pathName]

			// pathParams 最大 512 个字符
			return `weixin://dl/business/?appid=${appId}&path=${path}${pathParams ? `&query=${encodeURIComponent(pathParams.slice(0, 512))}` : ''}`
		}
		case 'scan':
		default:
			return `/${pathName}${pathParams ? `?${pathParams}` : ''}`
	}
}
