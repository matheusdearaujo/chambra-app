import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeProvider } from "_theme/ThemeProvider";
import { ThemeModeProvider } from "_shared/contexts/ThemeModeContext";

type Props = {
	children?: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
	return (
		<SafeAreaProvider>
			<ThemeModeProvider>
				<ThemeProvider>{children}</ThemeProvider>
			</ThemeModeProvider>
		</SafeAreaProvider>
	);
};
