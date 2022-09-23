import { customColors, customFonts, size } from "./config";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { CustomThemeProps } from "./props/customThemeProps";

const light = {
	...NavigationDefaultTheme,
	...PaperDefaultTheme,
	size,
	colors: {
		...NavigationDefaultTheme.colors,
		...PaperDefaultTheme.colors,
		...customColors,
		background: customColors.white,
		surface: customColors.grey100,
	},
	fonts: customFonts,
} as CustomThemeProps;

export default light;
