import { FlickeringGridByTheme } from "@/components/ui/flickering-grid-by-theme";
import { Ripple } from "@/components/ui/ripple";
import { Safari } from "@/components/ui/safari";
import type { Project } from "@/interfaces/project";

export const PROJECTS_LIST: Project[] = [
	{
		title: "Advanced AI Algorithms",
		description:
			"Our platform utilizes cutting-edge AI algorithms to provide accurate and efficient solutions for your business needs.",
		className: "hover:bg-red-500/10 transition-all duration-500 ease-out",
		links: [
			{
				title: "Demo",
				url: "https://acme.ai",
				type: "demo",
			},
		],
		tags: [
			"react",
			"nextjs",
			"tailwindcss",
			"astro",
			"typescript",
			"node",
			"supabase",
		],
		content: (
			<>
				<Safari
					src={`/images/projects/maison-dubon.webp`}
					url="https://acme.ai"
					className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
				/>
			</>
		),
	},
	{
		title: "Secure Data Handling",
		description:
			"We prioritize your data security with state-of-the-art encryption and strict privacy protocols, ensuring your information remains confidential.",
		className:
			"order-3 xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
		links: [
			{
				title: "Demo",
				url: "https://acme.ai",
				type: "demo",
			},
			{
				title: "Repo",
				url: "https://acme.ai",
				type: "code",
			},
		],
		tags: [
			"golang",
			"aws",
			"supabase",
			"postgres",
			"redis",
			"docker",
			"kubernetes",
		],
		content: (
			<Safari
				src={`/images/projects/maison-dubon.webp`}
				url="https://acme.ai"
				className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
			/>
		),
	},
	{
		title: "Seamless Integration",
		description:
			"Easily integrate our AI solutions into your existing workflows and systems for a smooth and efficient operation.",
		className:
			"md:row-span-2 hover:bg-orange-500/10 transition-all duration-500 ease-out",
		links: [
			{
				title: "Demo",
				url: "https://acme.ai",
				type: "demo",
			},
		],
		tags: [
			"react",
			"nextjs",
			"tailwindcss",
			"astro",
		],
		content: (
			<>
				<FlickeringGridByTheme
					className="z-0 absolute inset-0 [mask:radial-gradient(circle_at_center,#fff_400px,transparent_0)]"
					squareSize={4}
					color={{
						light: "#000",
						dark: "#fff",
					}}
					gridGap={6}
					maxOpacity={0.1}
					flickerChance={0.1}
					height={800}
					width={800}
				/>
				<Safari
					src={`/images/projects/maison-dubon.webp`}
					url="https://acme.ai"
					className="-mb-48 ml-12 mt-16 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-20px] transition-all duration-300"
				/>
			</>
		),
	},
	{
		title: "Customizable Solutions",
		description:
			"Tailor our AI services to your specific needs with flexible customization options, allowing you to get the most out of our platform.",
		className:
			"flex-row order-4 md:col-span-2 md:flex-row xl:order-none hover:bg-blue-500/10 transition-all duration-500 ease-out",
		links: [
			{
				title: "Demo",
				url: "https://acme.ai",
				type: "demo",
			},
		],
		tags: [
			"angular",
			"typescript",
			"supabase",
			"postgres",
			"redis",
		],
		content: (
			<>
				<Ripple className="absolute -bottom-full" />
				<Safari
					src={`/images/projects/maison-dubon.webp`}
					url="https://acme.ai"
					className="-mb-32 mt-4 max-h-64 w-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-y-[-10px] transition-all duration-300"
				/>
			</>
		),
	},
];
