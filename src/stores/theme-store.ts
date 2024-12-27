import { DARK_THEME, LIGHT_THEME } from "@/constants/themes"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = typeof DARK_THEME | typeof LIGHT_THEME

interface ThemeState {
	theme: Theme
	toggleTheme: () => void
	setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set) => ({
			theme: window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light",
			toggleTheme: () =>
				set((state) => ({
					theme: state.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME,
				})),
			setTheme: (theme) => set({ theme }),
		}),
		{
			name: "theme",
		}
	)
)
