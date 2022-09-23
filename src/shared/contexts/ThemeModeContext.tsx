import React, { useState } from "react";

type ThemeMode = "light" | "dark";

interface ThemeModeInterface {
	themeMode: ThemeMode;
	toggleThemeMode(): void;
}

export const ThemeModeContext = React.createContext<ThemeModeInterface>({
	themeMode: "light",
	toggleThemeMode: () => null,
} as ThemeModeInterface);

type Props = {
	children?: React.ReactNode;
};

export const ThemeModeProvider: React.FC<Props> = ({ children }) => {
	const [themeMode, setTheme] = useState<ThemeMode>("light");

	const toggleThemeMode = () => {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	};
	return (
		<ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}>
			{children}
		</ThemeModeContext.Provider>
	);
};
