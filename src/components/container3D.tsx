import Atropos from 'atropos/react'
import { useEffect, useState, type ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export const Container3D = ({ children }: Props) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)')
		setIsMobile(mediaQuery.matches)

		const handleMediaQueryChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches)
		}

		mediaQuery.addEventListener('change', handleMediaQueryChange)

		return () => {
			mediaQuery.removeEventListener('change', handleMediaQueryChange)
		}
	}, [])

	return (
		<div className='h-full'>
			{isMobile ? (
				<>{children}</>
			) : (
				<Atropos
					highlight={true}
					rotateClassName='[clip-path:_polygon(8%_26%,_50%_2%,_92%_26%,_92% 74%,_50%_98%,_8%_74%)]'
					className='block w-full h-auto [box-sizing:border-box] '
				>
					{children}
				</Atropos>
			)}
		</div>
	)
}
