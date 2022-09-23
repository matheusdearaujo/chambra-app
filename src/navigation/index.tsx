import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackParamsList } from "./types";

import { HomeRoutes } from "_pages/home/navigation";
import { ChatRoutes } from "_pages/chat/navigation";

const MainStack = createStackNavigator<MainStackParamsList>();

export const AppRoutes: React.FC = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{ header: () => null }}>
				<MainStack.Screen name="HomeRoutes" component={HomeRoutes} />
				<MainStack.Screen name="ChatRoutes" component={ChatRoutes} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
};
