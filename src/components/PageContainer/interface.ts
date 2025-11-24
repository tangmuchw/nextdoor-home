import type { FooterProps } from '../Footer/interface'
import type { HeaderProps } from '../Header/interface'

export interface PageContainerProps extends AppDTO.ComponentBaseProps {
	/**
	 * 是否展示 Header
	 * @default true
	 */
	showHeader?: boolean

	/**
	 * 是否展示 Footer
	 * @default true
	 */
	showFooter?: boolean

	/**
	 * 是否展示 滚到顶部 按钮
	 * @default false
	 */
	showScrollTopBtn?: boolean
	

	header?: HeaderProps

	footer?: FooterProps

	/**
	 * 自动滚动到顶部
	 * @default false
	 */
	autoScrollTop?: boolean
}
