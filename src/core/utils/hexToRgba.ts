const hexToRgba = (hex: string, opacity: number) => {
	const h = hex.replace('#', '');
	const rgb = [];
	for (let i = 0; i < 6; i += 2) {
		rgb.push(parseInt(h.substr(i, 2), 16));
	}
	return `rgba(${rgb.join(',')},${opacity})`;
};

export default hexToRgba;
