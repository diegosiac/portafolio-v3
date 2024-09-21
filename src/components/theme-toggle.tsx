import { DARK_THEME } from "@/consts";
import { motion } from "framer-motion";
import { MoonStar, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);

		const theme = localStorage.getItem("theme");


		const element = document.documentElement
		element.classList.toggle(DARK_THEME)

		if (theme === "dark") {
			localStorage.setItem("theme", "light");

		} else {
			localStorage.setItem("theme", "dark");
		}

	};

	useEffect(() => {
		const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (e: MediaQueryListEvent) => {
			setIsDarkMode(e.matches);
		};
1
		systemPrefersDark.addEventListener("change", handleChange);

		return () => {
			systemPrefersDark.removeEventListener("change", handleChange);
		};
	}, [window.matchMedia("(prefers-color-scheme: dark)")]);

	return (
		<button
			onClick={toggleTheme}
			className="inline-flex rounded px-4 py-1 text-primary-inactive hover:text-primary bg-transparent overflow-hidden size-full"
		>
			<span className="sr-only">
				{isDarkMode ? "Cambiar al modo oscuro" : "Cambiar al modo claro"}
			</span>
			{isDarkMode ? (
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

