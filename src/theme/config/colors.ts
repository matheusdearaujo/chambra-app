import { Colors } from "react-native-paper";
import { ColorsProps } from "_theme/props/colorProps";
import hexToRgba from "_theme/utils/hexToRgba";

//PRIMARY
const primary = "#6C5CE7";
const primary100 = "#E4DFFD";
const primary200 = "#C8BFFC";
const primary300 = "#AA9EF7";
const primary400 = "#9184F0";
const primary500: string = primary;
const primary600 = "#5043C6";
const primary700 = "#392EA6";
const primary800 = "#251D85";
const primary900 = "#17116E";
const primaryTransparent100: string = hexToRgba(primary500, "0.08");
const primaryTransparent200: string = hexToRgba(primary500, "0.16");
const primaryTransparent300: string = hexToRgba(primary500, "0.24");
const primaryTransparent400: string = hexToRgba(primary500, "0.32");
const primaryTransparent500: string = hexToRgba(primary500, "0.40");
const primaryTransparent600: string = hexToRgba(primary500, "0.48");
const gradientPrimary: string[] = [primary, primary600, primary700];

//SECONDARY(ACCENT)
const accent = "#4430e0";

//SUCCESS
const success = "#209F4A";
const success100 = "#DAFBD5";
const success200 = "#B0F8AC";
const success300 = "#7EEA83";
const success400 = "#5BD56B";
const success500 = "#2CBA4D";
const success600 = success;
const success700 = "#168545";
const success800 = "#0E6B3E";
const success900 = "#08593A";
const successTransparent100: string = hexToRgba(success500, "0.08");
const successTransparent200: string = hexToRgba(success500, "0.16");
const successTransparent300: string = hexToRgba(success500, "0.24");
const successTransparent400: string = hexToRgba(success500, "0.32");
const successTransparent500: string = hexToRgba(success500, "0.40");
const successTransparent600: string = hexToRgba(success500, "0.48");

//INFO
const info = "#37B6E8";
const info100 = "#D7FDFD";
const info200 = "#AFF6FC";
const info300 = "#86E7F8";
const info400 = "#67D3F1";
const info500: string = info;
const info600 = "#288FC7";
const info700 = "#1B6CA7";
const info800 = "#114D86";
const info900 = "#0A376F";
const infoTransparent100: string = hexToRgba(info500, "0.08");
const infoTransparent200: string = hexToRgba(info500, "0.16");
const infoTransparent300: string = hexToRgba(info500, "0.24");
const infoTransparent400: string = hexToRgba(info500, "0.32");
const infoTransparent500: string = hexToRgba(info500, "0.40");
const infoTransparent600: string = hexToRgba(info500, "0.48");

const warning = "#FFF23D";
const warning100 = "#FFFDD8";
const warning200 = "#FFFBB1";
const warning300 = "#FFF88A";
const warning400 = "#FFF66D";
const warning500: string = warning;
const warning600 = "#DBCE2C";
const warning700 = "#B7AB1E";
const warning800 = "#938813";
const warning900 = "#7A6F0B";
const warningTransparent100: string = hexToRgba(warning500, "0.08");
const warningTransparent200: string = hexToRgba(warning500, "0.16");
const warningTransparent300: string = hexToRgba(warning500, "0.24");
const warningTransparent400: string = hexToRgba(warning500, "0.32");
const warningTransparent500: string = hexToRgba(warning500, "0.40");
const warningTransparent600: string = hexToRgba(warning500, "0.48");

const error = "#DB221F";
const error100 = "#FFE6D4";
const error200 = "#FFC7AA";
const error300 = "#FFA07F";
const error400 = "#FF7C60";
const error500 = "#FF402B";
const error600 = error;
const error700 = "#B7151F";
const error800 = "#930D21";
const error900 = "#7A0821";
const errorTransparent100: string = hexToRgba(error500, "0.08");
const errorTransparent200: string = hexToRgba(error500, "0.16");
const errorTransparent300: string = hexToRgba(error500, "0.24");
const errorTransparent400: string = hexToRgba(error500, "0.32");
const errorTransparent500: string = hexToRgba(error500, "0.40");
const errorTransparent600: string = hexToRgba(error500, "0.48");

export const customColors = {
	primary,
	primary100,
	primary200,
	primary300,
	primary400,
	primary500,
	primary600,
	primary700,
	primary800,
	primary900,
	primaryTransparent100,
	primaryTransparent200,
	primaryTransparent300,
	primaryTransparent400,
	primaryTransparent500,
	primaryTransparent600,
	gradientPrimary,
	success,
	success100,
	success200,
	success300,
	success400,
	success500,
	success600,
	success700,
	success800,
	success900,
	accent,
	successTransparent100,
	successTransparent200,
	successTransparent300,
	successTransparent400,
	successTransparent500,
	successTransparent600,
	info,
	info100,
	info200,
	info300,
	info400,
	info500,
	info600,
	info700,
	info800,
	info900,
	infoTransparent100,
	infoTransparent200,
	infoTransparent300,
	infoTransparent400,
	infoTransparent500,
	infoTransparent600,
	warning,
	warning100,
	warning200,
	warning300,
	warning400,
	warning500,
	warning600,
	warning700,
	warning800,
	warning900,
	warningTransparent100,
	warningTransparent200,
	warningTransparent300,
	warningTransparent400,
	warningTransparent500,
	warningTransparent600,
	error,
	error100,
	error200,
	error300,
	error400,
	error500,
	error600,
	error700,
	error800,
	error900,
	errorTransparent100,
	errorTransparent200,
	errorTransparent300,
	errorTransparent400,
	errorTransparent500,
	errorTransparent600,
	...Colors,
} as ColorsProps;
