import React from "react";
import { TextInput as NativeTextInput, TextStyle } from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { DefaultTheme } from "styled-components/native";

export type InputProps = Omit<
	React.ComponentPropsWithoutRef<typeof TextInput>,
	"mode" | "style"
> & {
	mode?: "flat" | "outlined" | "standard" | undefined;
	theme?: DefaultTheme;
	style?: TextStyle;
};

export const Input = React.forwardRef<NativeTextInput, InputProps>(
	({ mode, ...props }, ref) => {
		const { colors } = useTheme();
		return (
			<TextInput
				ref={ref}
				outlineColor={colors.surface}
				activeOutlineColor={colors.onSurface}
				mode={mode === "standard" || !mode ? "outlined" : mode}
				{...props}
			/>
		);
	},
);
