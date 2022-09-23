export const getTime = () => {
	const date = new Date();

	const hour = date.getHours();
	const min = date.getMinutes();

	let currentHour;
	let currentMin;

	if (hour < 10) currentHour = `0${hour}`;

	if (min < 10) currentMin = `0${min}`;

	return `${currentHour}:${currentMin}`;
};
