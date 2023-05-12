interface Options {
	inMemory?: boolean;
	savePath?: string;
	proxy?: {
		host: string;
		port: number;
		auth?: {
			username: string;
			password: string;
		};
		protocol?: "http" | "https";
	};
}

export default Options;
