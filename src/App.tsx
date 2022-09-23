import React from "react";
import { Providers } from "./Providers";
import { AppRoutes } from "./navigation";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { setLocale as yupSetLocale } from "yup";

import {
	Poppins_300Light,
	Poppins_100Thin,
	Poppins_400Regular,
	Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

const customFonts = {
	Poppins_Thin: Poppins_100Thin,
	Poppins_Light: Poppins_300Light,
	Poppins_Regular: Poppins_400Regular,
	Poppins_Medium: Poppins_600SemiBold,
};

import messages from "./config/messages";

yupSetLocale(messages);

export const App: React.FC = () => {
	const [isAppReady, setIsAppReady] = React.useState<boolean>(false);

	const initialize = async () => {
		try {
			await SplashScreen.preventAutoHideAsync();
			await Font.loadAsync(customFonts);
			await SplashScreen.hideAsync();
		} catch (error) {
			console.log(error);
		} finally {
			setIsAppReady(true);
		}
	};

	React.useEffect(() => {
		initialize();
	}, []);

	return (
		<>
			{isAppReady && (
				<GestureHandlerRootView style={{ flex: 1 }}>
					<Providers>
						<AppRoutes />
					</Providers>
				</GestureHandlerRootView>
			)}
		</>
	);
};
