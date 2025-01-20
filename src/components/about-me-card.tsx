export const AboutMeCard = ({
	circleSkills,
	textHighlightingShape,
}: {
	circleSkills?: React.ReactNode
	textHighlightingShape?: React.ReactNode
}) => {
	return (
		<div className="relative z-[999] flex flex-1 items-center justify-center p-10">
			<span className="absolute -bottom-[92px] -left-[92px] animate-[spin_20s_linear_infinite] opacity-20 [@media(min-width:845px)]:opacity-100">
				{circleSkills}
			</span>

			<div className="relative flex max-w-[45ch] flex-col">
				<span className="absolute right-0 top-[3.8rem] font-oxanium text-5xl font-bold leading-none tracking-[-0.1ch] opacity-10 md:right-0">
					/siac
				</span>

				<h2 className="mb-6 font-oxanium text-[3.45rem] font-bold leading-none">
					{textHighlightingShape}

					<span className="relative">Esta es mi historia</span>
				</h2>
				<p className="mb-2">
					Soy desarrollador de software con más de{" "}
					<span className="font-semibold">
						1 año de experiencia profesional
					</span>
					. Comencé en el mundo del desarrollo web enfocándome en el FrontEnd,
					pero ahora{" "}
					<span className="font-semibold">
						me especializo en BackEnd, DevOps y el Cloud.
					</span>
				</p>
				<p>
					Me encanta trabajar en equipo y enfrentar desafíos técnicos. Disfruto
					estar inmerso en proyectos innovadores y participar en hackatones,
					donde las ideas cobran vida.
				</p>
			</div>
		</div>
	)
}
