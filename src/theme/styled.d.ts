import "styled-components";
import { ColorsProps } from "./props/colorsProps";
import { CustomThemeProps } from "./props/customThemeProps";
declare global {
	namespace ReactNativePaper {
		interface ThemeColors extends ColorsProps {}

		interface Theme extends CustomThemeProps {}
	}
}
declare module "styled-components" {
	export interface DefaultTheme extends CustomThemeProps {}
}
