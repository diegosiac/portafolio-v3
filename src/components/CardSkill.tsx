import { useState, type MouseEvent } from "react"

interface Props {
	skill: string
	children: any
}

export const CardSkill = ({ skill, children }: Props) => {
	const [opacity, setOpacity] = useState(0)
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	})

	const handleMouseEnter = () => {
		setOpacity(1)
	}

	const handleMouseMove = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
		const element = e.nativeEvent

		setPosition({
			x: (element.layerX - 15) / 2,
			y: (element.layerY - 15) / 2,
		})
	}

	const handleMouseLeave = () => {
		setOpacity(0)
	}

	return (
		<div
			className="reveal relative overflow-hidden rounded bg-secondary-blur shadow-2xl"
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				id="spotlight"
				className="pointer-events-none absolute -inset-px transform-gpu opacity-0 transition duration-300 [&_svg]:size-16"
				style={{
					opacity: `${opacity}`,
					left: `${position.x}px`,
					top: `${position.y}px`,
				}}
			>
				{children}
			</div>

			<div className="flex w-[80px] flex-col items-center justify-between gap-4 p-2 text-center backdrop-blur-lg">
				{children}
				<p className="text-xs font-semibold">{skill}</p>
			</div>
		</div>
	)
}
