import React from "react";

import {
	BalloonContainer,
	BalloonPosition,
	BalloonStyle,
	BalloonSpacing,
	BalloonName,
	SpanName,
	BalloonDiv,
	BalloonDivWrap,
	Span,
	BalloonTime,
	SpanTime,
} from "./styles";

interface BalloonMessageProps {
	messageItens: {
		name?: string;
		color?: string;
		message: string;
		time: string;
	};
	username: string;
}

export const BalloonMessage = ({
	messageItens: { name, message, time, color },
	username,
}: BalloonMessageProps) => {
	return (
		<>
			{username === name ? (
				<BalloonContainer style={{ justifyContent: "flex-end" }}>
					<BalloonPosition>
						<BalloonStyle>
							<BalloonSpacing>
								<BalloonDiv>
									<BalloonDivWrap>
										<Span>
											<Span>{message}</Span>
										</Span>
									</BalloonDivWrap>
								</BalloonDiv>

								<BalloonTime>
									<Span>
										<SpanTime>{time}</SpanTime>
									</Span>
								</BalloonTime>
							</BalloonSpacing>
						</BalloonStyle>
					</BalloonPosition>
				</BalloonContainer>
			) : (
				<BalloonContainer style={{ justifyContent: "flex-start" }}>
					<BalloonPosition>
						<BalloonStyle>
							<BalloonSpacing>
								<BalloonName>
									<SpanName style={{ color: color }}>{name}</SpanName>
								</BalloonName>
								<BalloonDiv>
									<BalloonDivWrap>
										<Span>
											<Span>{message}</Span>
										</Span>
									</BalloonDivWrap>
								</BalloonDiv>

								<BalloonTime>
									<Span>
										<SpanTime>{time}</SpanTime>
									</Span>
								</BalloonTime>
							</BalloonSpacing>
						</BalloonStyle>
					</BalloonPosition>
				</BalloonContainer>
			)}
		</>
	);
};
