import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';

const GlowingTrail = memo(({ path, x, y }: { path: string; x: number; y: number }) => (
	<motion.path
		d={path}
		stroke="currentColor"
		strokeWidth="2"
		fill="none"
		initial={{ pathLength: 0, opacity: 0 }}
		animate={{ pathLength: 1, opacity: [0, 1, 1, 0] }}
		exit={{ pathLength: 0, opacity: 0 }}
		transition={{
			duration: 3,
			ease: "linear",
		}}
		className="filter blur-[2px]"
		transform={`translate(${x} ${y})`}
	/>
));

interface Trail {
	id: string;
	x: number;
	y: number;
	pathIndex: number;
}

interface Props {
	patternWidth?: number;
	patternHeight?: number;
	gridSize?: number;
	maxTrails?: number;
	interval?: number;
	className?: string;
}

export const TrianglesPattern = ({
	patternWidth = 100,
	patternHeight = 129.9,
	gridSize = 4,
	maxTrails = 50,
	interval = 1000,
	className,
}: Props) => {
	const paths = useMemo(() => [
		"M0 0 L50 0 L25 43.3 Z",
		"M50 0 L100 0 L75 43.3 Z",
		"M25 43.3 L75 43.3 L50 86.6 Z",
		"M0 86.6 L50 86.6 L25 129.9 Z",
		"M50 86.6 L100 86.6 L75 129.9 Z",
	], [])

	const [activeTrails, setActiveTrails] = useState<Trail[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		let animationFrameId: number;
		let lastTime = 0;

		const animate = (time: number) => {
			if (time - lastTime >= interval) {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % (gridSize * gridSize));
				lastTime = time;
			}

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => cancelAnimationFrame(animationFrameId);
	}, [gridSize, interval]);

	const getRandomPosition = useCallback(() => {
		const row = Math.floor(Math.random() * gridSize);
		const col = Math.floor(Math.random() * gridSize);

		const x = col * patternWidth;
		const y = row * patternHeight;

		return { x, y };
	}, [gridSize, patternWidth, patternHeight]);

	const createTrail = useCallback(() => {
		const { x, y } = getRandomPosition();

		return {
			id: crypto.randomUUID(),
			x,
			y,
			pathIndex: Math.floor(Math.random() * paths.length),
		};
	}, [getRandomPosition, paths]);

	useEffect(() => {
		const newTrails = Array.from({ length: 5 }).map(() => createTrail());

		setActiveTrails((prevTrails) => {
			const updatedTrails = [...prevTrails, ...newTrails];

			if (updatedTrails.length > maxTrails) {
				return updatedTrails.slice(-maxTrails);
			}

			return updatedTrails;
		});
	}, [currentIndex, createTrail, maxTrails]);


	return (
		<svg
			className={cn('size-full', className)}>
			<defs>
				<pattern
					id="trianglePattern"
					width={patternWidth}
					height={patternHeight}
					patternUnits="userSpaceOnUse"
				>
					<path
						d={paths.join(' ')}
						fill="none"
						stroke="currentColor"
						strokeWidth="0.5"
					/>
				</pattern>
				<filter id="glow">
					<feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
					<feMerge>
						<feMergeNode in="coloredBlur" />
						<feMergeNode in="SourceGraphic" />
					</feMerge>
				</filter>
			</defs>
			<rect width="100%" height="100%" fill="url(#trianglePattern)" />
			<g filter="url(#glow)">
				{activeTrails.map(trail => (
					<GlowingTrail
						key={trail.id}
						path={paths[trail.pathIndex]}
						x={trail.x}
						y={trail.y}
					/>
				))}
			</g>
		</svg>
	)
}
