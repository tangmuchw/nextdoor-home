import type { ImageProps } from 'next/image'

export interface AppImageProps
	extends AppDTO.ComponentBaseProps,
		Omit<ImageProps, 'alt'> {
	alt?: string
}
