import React, { useContext } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ThemeProvider as StyledThemeProvider } from "styled-components/native";
import { ThemeModeContext } from "_shared/contexts/ThemeModeContext";
import theme from ".";

type Props = {
	children?: React.ReactNode;
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const { themeMode } = useContext(ThemeModeContext);

	return (
		<PaperProvider theme={{ ...theme[themeMode] }}>
			<StyledThemeProvider theme={{ ...theme[themeMode] }}>
				{children}
			</StyledThemeProvider>
		</PaperProvider>
	);
};
