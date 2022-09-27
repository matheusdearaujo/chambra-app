import styled from "styled-components/native";

export const BalloonContainer = styled.View`
	display: flex;
	margin-bottom: ${({ theme }) => theme.size(2)};
`;

export const BalloonPosition = styled.View`
	max-width: 95%;
	position: relative;
`;

export const BalloonStyle = styled.View`
	background: #fff;
	position: relative;
	border-radius: ${({ theme }) => theme.size(2)};
`;

export const BalloonSpacing = styled.View`
	padding: ${({ theme }) => theme.size(1, 3, 2, 4)};
`;

export const BalloonName = styled.View`
	max-width: 100%;
	line-height: 22px;
	margin-bottom: ${({ theme }) => theme.size(2)};
`;

export const SpanName = styled.Text`
	margin-left: -2px;
	padding-left: 2px;
	word-wrap: break-word;
`;

export const BalloonDiv = styled.View``;

export const BalloonDivWrap = styled.View`
	position: relative;
	word-wrap: break-word;
`;

export const Span = styled.Text``;

export const BalloonTime = styled.View`
	text-align: right;
`;

export const SpanTime = styled.Text`
	font-size: ${({ theme }) => theme.size(0.5)};
	color: ${({ theme }) => theme.colors.infoTransparent400};
`;
