import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

import vercel from "@astrojs/vercel"

import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	output: "server",
	adapter: vercel(),
})
