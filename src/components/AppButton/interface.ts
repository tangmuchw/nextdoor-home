export interface AppButtonProps extends AppDTO.ComponentBaseProps {
	/**
	 * 类型, linear-orange 暖橘色渐变
	 * @default default
	 */
	type?: 'primary' | 'default' | 'text' | 'linear-orange'

	/**
	 * 禁用状态
	 * @default false
	 */
	disabled?: boolean

	/**
	 * loading
	 * @default false
	 */
	loading?: boolean

	/**
	 * hover 动画
	 * @default false
	 */
	hoverAnimate?: boolean

	/**
	 * 大小
	 * @default md
	 */
	size?: 'sm' | 'md' | 'lg'

	icon?: AppDTO.IconName

	iconClassName?: string

	href?: string

	onClick?: () => void
}
