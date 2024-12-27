import { PROJECTS_LIST } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { FolderGit2, Globe, Newspaper } from "lucide-react";

export const BentoProjects = () => {
	return (
		<div className="mx-auto mt-20 grid max-w-sm grid-cols-1 gap-5 text-background md:max-w-3xl md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:max-w-6xl xl:auto-rows-fr xl:grid-cols-3">
			{PROJECTS_LIST.map((project, index) => (
				<motion.div
					key={index}
					className={cn(
						"group relative items-start overflow-hidden bg-background dark:bg-[#262323] p-6 rounded-lg",
						project.className
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
					<div className="space-y-2">
						<h3 className="font-semibold text-primary">
							{project.title}
						</h3>
						<p className="text-foreground">{project.description}</p>
						<div className="flex flex-wrap gap-2">
							{project.tags.map((tag, index) => (
								<span
									key={index}
									className="inline-block rounded bg-primary px-2 py-1 font-semibold text-secondary text-xs"
								>
									{tag.toLowerCase()}
								</span>
							))}
						</div>
						<div className="flex flex-wrap gap-2">
							{project.links.map((link, index) => (
								<a
									key={index}
									href={link.url}
									target="_blank"
									title={link.title}
									rel="noreferrer noopener"
									className="flex items-center border border-border rounded py-1 px-2 text-foreground bg-foreground/5 hover:bg-foreground transition-colors hover:text-background gap-1.5 text-xs"
								>
									{link.type === "demo" ? (
										<>
											<Globe className="size-3.5" />
											Ver web
										</>
									) : link.type === "code" ? (
										<>
											<FolderGit2 className="size-3.5" />
											Código
										</>
									) : (
										<>
											<Newspaper className="size-3.5" />
											Ver articulo
										</>
									)}
								</a>
							))}
						</div>
					</div>
					{project.content}
					<div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
				</motion.div>
			))}
		</div>
	);
}
