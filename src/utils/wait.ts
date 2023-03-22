function Wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default Wait;
