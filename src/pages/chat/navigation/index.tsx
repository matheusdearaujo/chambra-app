import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChatStackParamsList } from "./types";

import { Chat } from "_pages/chat/screens/Chat";

const ChatStack = createStackNavigator<ChatStackParamsList>();

export const ChatRoutes: React.FC = () => {
	return (
		<ChatStack.Navigator initialRouteName="Chat">
			<ChatStack.Screen
				name="Chat"
				component={Chat}
				options={{ header: () => null }}
			/>
		</ChatStack.Navigator>
	);
};
