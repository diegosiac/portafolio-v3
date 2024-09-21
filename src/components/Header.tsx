import { motion } from "framer-motion";
import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
	name: string;
	href: string;
	label: string;
}

const navs: NavItem[] = [
	{
		name: "Portafolio",
		label: "Portafolio",
		href: "/",
	},
	{
		name: "Contacto",
		label: "Contacto",
		href: "/contact",
	},
	{
		name: "Blog",
		label: "Blog",
		href: "/blog",
	},
];

export function Header({ buttonTheme }: { buttonTheme?: ReactNode }) {
	const ref = useRef<HTMLUListElement>(null);
	const [left, setLeft] = useState(0);
	const [width, setWidth] = useState(0);
	const [opacity, setOpacity] = useState(0);

	const handleMouseEnter = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
		const node = e.currentTarget;
		const rect = node.getBoundingClientRect();
		setLeft(node.offsetLeft);
		setWidth(rect.width);
		setOpacity(0.8);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<header id="header-nav" className="fixed left-1/2 top-5 z-50 flex w-min -translate-x-1/2 items-center rounded-md p-1 text-primary">
			<nav>
				<ul
					onMouseLeave={handleMouseLeave}
					className="flex text-primary-inactive relative"
					ref={ref}
				>
					{navs.map((item) => (
						<li
							key={item.name}
							onMouseEnter={handleMouseEnter}
							className="z-10 block"
						>
							<a
								className="inline-block px-4 py-1.5 font-medium transition-colors duration-200  hover:text-primary text-primary/60 tracking-tight"
								href={item.href}>
								{item.name}
							</a>
						</li>
					))}
					<li
						onMouseEnter={handleMouseEnter}
						className="z-10 block"
					>
						<ThemeToggle />
					</li>
					<motion.li
						animate={{ left, width, opacity }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
						className="absolute inset-0 rounded bg-secondary"
					/>
				</ul>
			</nav>
		</header>
	);
}
