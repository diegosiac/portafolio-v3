import { FadeText } from "@/components/ui/fade-text"
import { TrianglesPattern } from "@/components/ui/triangles-pattern"

export const AboutMeAside = () => {
	return (
		<div className="relative h-[500px] md:h-full w-full md:w-[400px] font-oxanium">
			<FadeText
				className="absolute -right-9 top-16 z-50 text-9xl font-bold leading-none"
				direction="left"
				text="DIE"
				framerProps={{
					show: { transition: { delay: 0.3 } },
				}}
			/>

			<FadeText
				className="absolute left-0 top-40 z-10 text-[7rem] font-bold leading-none"
				direction="left"
				text="EG"
				framerProps={{
					show: { transition: { delay: 0.5 } },
				}}
			/>

			<FadeText
				className="absolute right-0 top-[12.5rem] z-10 text-[7rem] font-bold leading-none"
				direction="right"
				text="GO"
				framerProps={{
					show: { transition: { delay: 0.7 } },
				}}
			/>

			<img
				src="/aaypaes8h-removebg-preview.png"
				className="absolute left-0 top-0 z-30 h-[500px]"
			/>

			<FadeText
				className="absolute left-0 top-[18rem] z-10 text-[7rem] font-bold leading-none text-orange"
				direction="right"
				text="CR"
				framerProps={{
					show: { transition: { delay: 0.85 } },
				}}
			/>

			<FadeText
				className="absolute right-0 top-80 z-50 text-[9.5rem] font-bold leading-none text-orange"
				direction="left"
				text="UZ"
				framerProps={{
					show: { transition: { delay: 1 } },
				}}
			/>

			<div
				className="bg-image absolute z-50 size-full bg-gradient-to-l from-orange/50 via-transparent"
			>
			</div>

			<TrianglesPattern className="opacity-40" />
		</div>
	)
}
