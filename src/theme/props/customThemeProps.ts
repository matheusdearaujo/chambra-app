import { Theme as NavigationTheme } from "@react-navigation/native";
import { Theme as PaperTheme } from "react-native-paper/lib/typescript/types";
import { ColorsProps } from "./colorProps";

export type CustomThemeProps = PaperTheme &
	NavigationTheme & {
		colors: ColorsProps;
		size: (
			factor1: number,
			factor2?: number,
			factor3?: number,
			factor4?: number,
		) => string;
	};
