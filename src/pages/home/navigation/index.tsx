import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeStackParamsList } from "./types";

import { Begin } from "_pages/home/screens/Begin";

const HomeStack = createStackNavigator<HomeStackParamsList>();

export const HomeRoutes: React.FC = () => {
	return (
		<HomeStack.Navigator initialRouteName="Begin">
			<HomeStack.Screen
				name="Begin"
				component={Begin}
				options={{ header: () => null }}
			/>
		</HomeStack.Navigator>
	);
};
