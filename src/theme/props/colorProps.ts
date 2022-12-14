import { Theme as NavigationTheme } from "@react-navigation/native";
import { Colors } from "react-native-paper";
import { Theme as PaperTheme } from "react-native-paper/lib/typescript/types";

export type ColorsProps = NavigationTheme["colors"] &
	PaperTheme["colors"] &
	typeof Colors & {
		chatBackground: string;
		chambraColor: string;
		primary: string;
		primary100: string;
		primary200: string;
		primary300: string;
		primary400: string;
		primary500: string;
		primary600: string;
		primary700: string;
		primary800: string;
		primary900: string;
		primaryTransparent100: string;
		primaryTransparent200: string;
		primaryTransparent300: string;
		primaryTransparent400: string;
		primaryTransparent500: string;
		primaryTransparent600: string;
		gradientPrimary: string[];
		success: string;
		success100: string;
		success200: string;
		success300: string;
		success400: string;
		success500: string;
		success600: string;
		success700: string;
		success800: string;
		success900: string;
		successTransparent100: string;
		successTransparent200: string;
		successTransparent300: string;
		successTransparent400: string;
		successTransparent500: string;
		successTransparent600: string;
		info: string;
		info100: string;
		info200: string;
		info300: string;
		info400: string;
		info500: string;
		info600: string;
		info700: string;
		info800: string;
		info900: string;
		infoTransparent100: string;
		infoTransparent200: string;
		infoTransparent300: string;
		infoTransparent400: string;
		infoTransparent500: string;
		infoTransparent600: string;
		warning: string;
		warning100: string;
		warning200: string;
		warning300: string;
		warning400: string;
		warning500: string;
		warning600: string;
		warning700: string;
		warning800: string;
		warning900: string;
		warningTransparent100: string;
		warningTransparent200: string;
		warningTransparent300: string;
		warningTransparent400: string;
		warningTransparent500: string;
		warningTransparent600: string;
		error: string;
		error100: string;
		error200: string;
		error300: string;
		error400: string;
		error500: string;
		error600: string;
		error700: string;
		error800: string;
		error900: string;
		errorTransparent100: string;
		errorTransparent200: string;
		errorTransparent300: string;
		errorTransparent400: string;
		errorTransparent500: string;
		errorTransparent600: string;
	};
