import { useMedia } from "@/hooks/use-media"
import "atropos/css"
import Atropos from 'atropos/react'
import { type ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const Container3D = ({ children }: Props) => {
	const isMobile = useMedia("(max-width: 768px)")

	if (isMobile) {
		return (
			<>{children}</>
		)
	}


	return (
		<Atropos
			highlight={true}
		>
			{children}
		</Atropos>
	)
}


