import { DARK_THEME } from "@/constants/themes";
import { useThemeStore } from "@/stores/theme-store";
import { type ComponentProps } from "react";
import { FlickeringGrid } from "./flickering-grid";

interface Color {
	light: string;
	dark: string;
}

type FlickeringGridProps = ComponentProps<typeof FlickeringGrid>;

type Props = Omit<FlickeringGridProps, "color"> & {
	color: Color;
};

export const FlickeringGridByTheme = ({ color, ...props }: Props) => {
	const theme = useThemeStore((state) => state.theme);

	return (
		<FlickeringGrid
			color={theme === DARK_THEME ? color.dark : color.light}
			{...props}
		/>
	)
}
