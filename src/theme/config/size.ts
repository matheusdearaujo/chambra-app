const spacingPx = 4;

const calcFactor = (fact?: number) =>
	typeof fact !== "undefined" ? ` ${spacingPx * fact}px` : "";

export const size = (
	factor1: number,
	factor2?: number,
	factor3?: number,
	factor4?: number,
) =>
	`${calcFactor(factor1)}${calcFactor(factor2)}${calcFactor(
		factor3,
	)}${calcFactor(factor4)}`;
