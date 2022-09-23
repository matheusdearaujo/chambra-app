import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { MainStackRouteProps } from "_navigation/types";
import { getTime } from "_shared/utils/getTime";

export const Chat: React.FC = () => {
	const route = useRoute<MainStackRouteProps<"ChatRoutes">>();

	const sendMessage = (value: string) => {
		const message = value
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");

		const db = getDatabase();

		set(ref(db, "messages"), {
			name: route.params.username,
			color: route.params.color,
			message: message,
			time: getTime(),
		});
	};

	return (
		<View>
			<Text>Chat</Text>
		</View>
	);
};
