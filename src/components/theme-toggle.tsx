import { DARK_THEME } from "@/constants/themes";
import { useThemeStore } from "@/stores/theme-store";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";

const iconVariants = {
	light: {
		y: [50, -10, 0],
	},
	dark: {
		y: [-50, 10, 0],
	},
	exit: {
		y: 0,
		opacity: 1,
	},
};

const transition = {
	type: "spring",
	stiffness: 400,
	damping: 20
}

export const ThemeToggle = () => {
	const theme = useThemeStore((state) => state.theme);
	const toggleThemeStore = useThemeStore((state) => state.toggleTheme);

	const toggleTheme = () => {
		toggleThemeStore();

		const element = document.documentElement
		element.classList.toggle(DARK_THEME)
	};

	return (
		<button
			onClick={toggleTheme}
			className="inline-flex rounded px-4 py-1 overflow-hidden size-full"
		>
			<span className="sr-only">
				{theme === DARK_THEME ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
			</span>
			{theme === DARK_THEME ? (
				<motion.div
					key="moon"
					variants={iconVariants}
					initial="exit"
					animate="dark"
					exit="exit"
					transition={transition}
				>
					<MoonStar className="size-6" />
				</motion.div>
			) : (
				<motion.div
					key="sun"
					variants={iconVariants}
					initial="exit"
					animate="light"
					exit="exit"
					transition={transition}
				>
					<Sun className="size-6" />
				</motion.div>
			)}
		</button>
	);
};

