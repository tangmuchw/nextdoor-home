'use client'

export const disablePageScroll = () => {
	const body = document.querySelector('body')
	body?.classList.remove('overflow-y-auto')
	body?.classList.add('overflow-hidden')
}

export const enablePageScroll = () => {
	const body = document.querySelector('body')
	body?.classList.remove('overflow-hidden')
	body?.classList.add('overflow-y-auto')
}
