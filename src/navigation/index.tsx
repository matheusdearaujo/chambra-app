import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { MainStackParamsList } from "./types";

import { Begin } from "_pages/home/screens/Begin";
import { Chat } from "_pages/chat/screens/Chat";

const MainStack = createStackNavigator<MainStackParamsList>();

export const AppRoutes: React.FC = () => {
	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{ header: () => null }}>
				<MainStack.Screen name="Begin" component={Begin} />
				<MainStack.Screen name="Chat" component={Chat} />
			</MainStack.Navigator>
		</NavigationContainer>
	);
};
