
import { useMedia } from '@/hooks/use-media';
import { motion } from 'framer-motion';

export const AboutMeCard = () => {
	const isMobile = useMedia("(max-width: 1000px)")

	const view = { x: isMobile ? 0 : "50%" }

	return (
		<motion.div
			className="m-3 flex md:flex-1 items-center justify-center rounded-md md:rounded-3xl p-5 shadow-md backdrop-blur-sm bg-[#f8f7e57c] relative z-[999]"
			initial={view}
			whileInView={{ x: 0 }}
			transition={{
				duration: 0.1,
				type: "spring",
				stiffness: 170,
				damping: 30,
			}}
			viewport={{ once: true }}
		>
			<div className="flex max-w-[45ch] flex-col">
				<span className="opacity-35 font-bold font-oxanium text-3xl mb-2">
					/ 01
				</span>
				<h2 className="mb-6 text-balance text-[3.45rem] leading-none font-bold font-oxanium">
					<span className="relative before:absolute before:bottom-1 before:-left-2 before:w-40 before:h-4 before:bg-yellow-500 before:opacity-35 before:-z-10 inline-block">
						Esta es&nbsp;
					</span>
					<span className="relative before:absolute before:bottom-1 before:-left-2 before:w-60 before:h-4 before:bg-rose-600 before:opacity-35 before:-z-10 inline-block">
						mi historia
					</span>
				</h2>
				<p className="mb-2">
					Soy desarrollador de software con más de <span className="font-semibold">1 año de experiencia profesional</span>. Comencé en el mundo del desarrollo web enfocándome en el FrontEnd, pero ahora <span className="font-semibold">me especializo en BackEnd, DevOps y el Cloud.</span>
				</p>
				<p>
					Me encanta trabajar en equipo y enfrentar desafíos técnicos. Disfruto estar inmerso en proyectos innovadores y participar en hackatones, donde las ideas cobran vida.
				</p>
			</div>
		</motion.div>
	)
}
