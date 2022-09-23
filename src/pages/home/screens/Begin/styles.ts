import styled from "styled-components/native";
import { Button } from "react-native-paper";

export const BeginContainer = styled.View`
	flex: 1;
	background-color: #fff;
	justify-content: center;
`;

export const BeginContent = styled.View`
	padding: ${({ theme }) => theme.size(0, 4)};
	margin-top: ${({ theme }) => theme.size(2)};
`;

export const BeginButton = styled(Button)`
	margin: ${({ theme }) => theme.size(4)};
	background-color: ${({ theme }) => theme.colors.red700};
`;
