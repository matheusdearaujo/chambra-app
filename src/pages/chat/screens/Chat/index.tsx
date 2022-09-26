import React, { useState } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { MainStackRouteProps } from "_navigation/types";

import { ref, set, child, push } from "firebase/database";
import { db } from "_config/firebase";

import { getTime } from "_shared/utils/getTime";

import {
	ChatContainer,
	ChatContent,
	FormContent,
	InputChat,
	InputMessage,
	ButtonsChat,
} from "./styles";

export const Chat: React.FC = () => {
	const [message, setMessage] = useState<string>("");

	const route = useRoute<MainStackRouteProps<"Chat">>();

	const { username, color } = route.params;

	const sendMessage = () => {
		const key = push(child(ref(db), "messages")).key;

		set(ref(db, `messages/${key}`), {
			name: username,
			color: color,
			message: message,
			time: getTime(),
		});

		setMessage("");
	};

	return (
		<>
			<ChatContainer>
				<ChatContent></ChatContent>
			</ChatContainer>
			<FormContent>
				<InputChat>
					<ButtonsChat>
						<MaterialIcons name="emoji-emotions" size={26} color="white" />
					</ButtonsChat>
					<InputMessage
						multiline
						onChangeText={message => setMessage(message)}
						value={message}
						placeholder="Digite sua mensagem aqui."
					/>
					<ButtonsChat onPress={sendMessage} disabled={!message}>
						<FontAwesome name="send" size={24} color="white" />
					</ButtonsChat>
				</InputChat>
			</FormContent>
		</>
	);
};
