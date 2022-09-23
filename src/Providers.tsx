import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "_redux/store";
import { ThemeProvider } from "_theme/ThemeProvider";
import { ThemeModeProvider } from "_shared/contexts/ThemeModeContext";

type Props = {
	children?: React.ReactNode;
};

export const Providers: React.FC<Props> = ({ children }) => {
	return (
		<SafeAreaProvider>
			<ReduxProvider store={store}>
				<PersistGate loading={<ActivityIndicator />} persistor={persistor}>
					<ThemeModeProvider>
						<ThemeProvider>{children}</ThemeProvider>
					</ThemeModeProvider>
				</PersistGate>
			</ReduxProvider>
		</SafeAreaProvider>
	);
};
