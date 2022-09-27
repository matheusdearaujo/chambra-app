import React, { useState, useEffect } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { MainStackRouteProps } from "_navigation/types";

import { ref, set, child, push, onValue } from "firebase/database";
import { db } from "_config/firebase";

import { getTime } from "_shared/utils/getTime";
import { BalloonMessage } from "_pages/chat/components/BalloonMessage";

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
	const [allMessages, setAllMessages] = useState<any>({});

	const messagesKeys = Object.keys(allMessages);

	useEffect(() => {
		onValue(ref(db, "messages"), snapshot => {
			const data = snapshot.val() || {};

			setAllMessages({ ...data });
		});
	}, []);

	const { username, color } = useRoute<MainStackRouteProps<"Chat">>().params;

	const sendMessage = () => {
		const key = push(child(ref(db), "messages")).key;

		const msg = message
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");

		set(ref(db, `messages/${key}`), {
			name: username,
			color: color,
			message: msg,
			time: getTime(),
		});

		setMessage("");
	};

	return (
		<>
			<ChatContainer>
				<ChatContent>
					{messagesKeys.map((item: any) => (
						<BalloonMessage
							key={item}
							messageItens={allMessages[item]}
							username={username}
						/>
					))}
				</ChatContent>
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
