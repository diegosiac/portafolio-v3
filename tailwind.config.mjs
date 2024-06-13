import animations from "@midudev/tailwind-animations"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"oxanium": ["Oxanium Variable", "system-ui", "sans-serif"],
				"tilt-neon": ["Tilt Neon Variable", "system-ui", "sans-serif"],
				"ubuntu": ["Ubuntu Sans Variable", "system-ui", "sans-serif"],
				"tourney": ["Tourney Variable", "system-ui", "sans-serif"],
			},
			colors: {
				primary: "hsl(var(--color-primary))",
				secondary: "hsl(var(--color-secondary))",
				orange: "hsl(var(--color-orange))",
				green: "var(--color-green)",
			},
			backgroundColor: {
				"primary-blur": "var(--color-primary-blur)",
				"secondary-blur": "var(--color-secondary-blur)",
			},
			textColor: {
				"primary-inactive": "var(--color-primary-inactive)",
			},
			animation: {
				spin: "ping2 1s cubic-bezier(0, 0, 0.2, 1) infinite",
			},
			boxShadowColor: {
				glow: "var(--box-shadow-glows)",
			},
			keyframes: {
				ping2: {
					"75%, 100%": { transform: "scale(2)", opacity: 0 },
					"100%": { transform: "rotate(360deg)" },
				},
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		animations,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
		},
	],
}
