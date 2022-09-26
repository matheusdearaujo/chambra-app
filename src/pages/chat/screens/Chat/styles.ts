import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { Input } from "_shared/components";

export const ChatContainer = styled.ScrollView`
	background-color: ${({ theme }) => theme.colors.chatBackground};
`;

export const ChatContent = styled.View`
	padding: ${({ theme }) => theme.size(2)};
`;

export const FormContent = styled.View`
	background-color: ${({ theme }) => theme.colors.chambraColor};
	height: ${({ theme }) => theme.size(16)};
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InputChat = styled.View`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	width: 100%;
`;

export const InputMessage = styled(Input)`
	width: 70%;
	padding: ${({ theme }) => theme.size(1, 2)};
	border-radius: ${({ theme }) => theme.size(4)};
`;

export const ButtonsChat = styled(Button)``;
