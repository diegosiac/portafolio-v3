import animations from "@midudev/tailwind-animations"
import AnimationsTailwind from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				"oxanium": ["Oxanium Variable", "system-ui", "sans-serif"],
				"tilt-neon": ["Tilt Neon Variable", "system-ui", "sans-serif"],
				"ubuntu": ["Ubuntu Sans Variable", "system-ui", "sans-serif"],
				"tourney": ["Tourney Variable", "system-ui", "sans-serif"],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: "hsl(var(--color-primary))",
				secondary: "hsl(var(--color-secondary))",
				orange: "hsl(var(--color-orange))",
				green: "var(--color-green)",
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
			},
			backgroundColor: {
				"primary-blur": "var(--color-primary-blur)",
				"secondary-blur": "var(--color-secondary-blur)",
			},
			textColor: {
				"primary-inactive": "var(--color-primary-inactive)",
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
			animation: {
				"spin": "ping2 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			boxShadowColor: {
				glow: "var(--box-shadow-glows)",
			},
			keyframes: {
				"ping2": {
					"75%, 100%": { transform: "scale(2)", opacity: 0 },
					"100%": { transform: "rotate(360deg)" },
				},
				"fadeIn": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
		},
	},
	darkMode: "class",
	plugins: [
		AnimationsTailwind,
		animations,
		function ({ addVariant }) {
			addVariant("any-hover", "@media (any-hover: hover) { &:hover }")
		},
	],
}
