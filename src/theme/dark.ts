import { customColors, customFonts, size } from "./config";
import { DarkTheme as PaperDarkTheme } from "react-native-paper";
import { DarkTheme as NavigationDarkTheme } from "@react-navigation/native";
import { CustomThemeProps } from "./props/customThemeProps";

const dark = {
	...NavigationDarkTheme,
	...PaperDarkTheme,
	size,
	colors: {
		...NavigationDarkTheme.colors,
		...PaperDarkTheme.colors,
		...customColors,
	},
	fonts: customFonts,
} as CustomThemeProps;

export default dark;
