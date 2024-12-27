import { motion, type Variants } from "framer-motion";
import { useMemo } from "react";

type FadeTextProps = {
	className?: string;
	direction?: "up" | "down" | "left" | "right";
	framerProps?: Variants;
	text: string;
};

export const FadeText = ({
	direction = "up",
	className,
	framerProps = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1, transition: { type: "spring", }
		},
	},
	text,
}: FadeTextProps) => {
	const directionOffset = useMemo(() => {
		const map = { up: 40, down: -40, left: -40, right: 40 };
		return map[direction];
	}, [direction]);

	const axis = direction === "up" || direction === "down" ? "y" : "x";

	const FADE_ANIMATION_VARIANTS = useMemo(() => {
		const { hidden, show, ...rest } = framerProps as {
			[name: string]: { [name: string]: number; opacity: number };
		};

		return {
			...rest,
			hidden: {
				...(hidden ?? {}),
				opacity: hidden?.opacity ?? 0,
				[axis]: hidden?.[axis] ?? directionOffset,
			},
			show: {
				...(show ?? {}),
				opacity: show?.opacity ?? 1,
				[axis]: show?.[axis] ?? 0,
			},
		};
	}, [directionOffset, axis, framerProps]);

	return (
		<motion.span
			initial={FADE_ANIMATION_VARIANTS.hidden}
			whileInView={FADE_ANIMATION_VARIANTS.show}
			viewport={{ once: true }}
			className={className}
		>
			{text}
		</motion.span>
	);
}
