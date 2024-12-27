export type ProjectLinkType = "demo" | "code" | "article"

export interface ProjectLink {
	title: string
	url: string
	type: ProjectLinkType
}

export interface Project {
	title: string
	description: string
	className?: string
	content: JSX.Element
	links: ProjectLink[]
	tags: string[]
}
