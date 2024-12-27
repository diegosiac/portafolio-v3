import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	index: number
	className?: string
}

export const CardProject = ({ children, index, className }: Props) => {
	return (
		<motion.div
			key={index}
			className={cn(
				"group relative items-start overflow-hidden rounded-2xl bg-neutral-50 p-6 dark:bg-neutral-800",
				className
			)}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				duration: 0.5,
				type: "spring",
				stiffness: 100,
				damping: 30,
				delay: index * 0.1,
			}}
			viewport={{ once: true }}
		>
			{children}
			<slot />
		</motion.div>
	)
}
