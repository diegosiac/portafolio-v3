import { useState } from "preact/hooks"

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

	const handleMouseMove = (e: MouseEvent) => {
		setPosition({
			x: e.layerX - 15,
			y: e.layerY - 15,
		})
	}

	const handleMouseLeave = () => {
		setOpacity(0)
	}

	return (
		<div
			class="revealing-image relative overflow-hidden rounded bg-secondary-blur shadow-2xl"
			onMouseMove={handleMouseMove}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				id="spotlight"
				class="pointer-events-none absolute -inset-px transform-gpu opacity-0 transition duration-300"
				style={`
					opacity: ${opacity};
					left: ${position.x}px;
					top: ${position.y}px;
				`}
			>
				{children}
			</div>

			<div class="flex w-[80px] flex-col items-center justify-between gap-4 p-2 text-center backdrop-blur-md">
				{children}
				<p class="text-xs font-semibold">{skill}</p>
			</div>
		</div>
	)
}
