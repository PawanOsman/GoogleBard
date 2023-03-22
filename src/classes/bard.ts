import vm from "vm";
import fs from "fs";
import https from "https";
import { load } from "cheerio";
import Wait from "../utils/wait.js";
import Random from "../utils/random.js";
import Options from "../models/options.js";
import AppDbContext from "./app-dbcontext.js";
import Conversation from "../models/conversation.js";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class Bard {
	private axios: AxiosInstance;
	private db: AppDbContext;
	private cookies: string = "";

	constructor(cookie: string, options?: Options) {
		this.db = new AppDbContext();

		this.cookies = cookie;

		const agent = new https.Agent({
			rejectUnauthorized: false,
		});

		let axiosOptions: AxiosRequestConfig = {
			proxy: options?.proxy,
			httpsAgent: agent,
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/109.0",
				Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
				"Accept-Language": "en-US,en;q=0.5",
				"Accept-Encoding": "gzip, deflate, br",
				Connection: "keep-alive",
				"Upgrade-Insecure-Requests": "1",
				"Sec-Fetch-Dest": "document",
				"Sec-Fetch-Mode": "navigate",
				"Sec-Fetch-Site": "none",
				"Sec-Fetch-User": "?1",
				TE: "trailers",
			},
		};

		if (!axiosOptions.proxy) delete axiosOptions.proxy;
		this.axios = axios.create(axiosOptions);
	}

	private async waitForLoad() {
		while (this.db === null) {
			await Wait(1000);
		}
		await this.db.WaitForLoad();
	}

	private addConversation(id: string) {
		let conversation: Conversation = {
			id: id,
			c: "", // conversationId
			r: "", // requestId
			rc: "", // responseId
			lastActive: Date.now(),
		};
		this.db.conversations.Add(conversation);
		return conversation;
	}

	private getConversationById(id?: string) {
		if (!id)
			return {
				id: "",
				c: "", // conversationId
				r: "", // requestId
				rc: "", // responseId
				lastActive: Date.now(),
			};
		let conversation = this.db.conversations.FirstOrDefault((conversation) => conversation.id === id);
		if (!conversation) {
			conversation = this.addConversation(id);
		} else {
			conversation.lastActive = Date.now();
		}
		return conversation;
	}

	public resetConversation(id: string = "default") {
		let conversation = this.db.conversations.FirstOrDefault((conversation) => conversation.id === id);
		if (!conversation) return;
		conversation = {
			id: id,
			c: "", // conversationId
			r: "", // requestId
			rc: "", // responseId
			lastActive: Date.now(),
		};
	}

	private ParseResponse(text: string) {
		let resData = {
			r: "",
			c: "",
			rc: "",
			responses: [],
		};
		let parseData = (data: string) => {
			if (typeof data === "string") {
				if (data?.startsWith("c_")) {
					resData.c = data;
					return;
				}
				if (data?.startsWith("r_")) {
					resData.r = data;
					return;
				}
				if (data?.startsWith("rc_")) {
					resData.rc = data;
					return;
				}
				resData.responses.push(data);
			}
			if (Array.isArray(data)) {
				data.forEach((item) => {
					parseData(item);
				});
			}
		};
		try {
			const lines = text.split("\n");
			for (let i in lines) {
				const line = lines[i];
				if (line.includes("wrb.fr")) {
					let data = JSON.parse(line);
					let responsesData = JSON.parse(data[0][2]);
					responsesData.forEach((response) => {
						parseData(response);
					});
				}
			}
		} catch (e: any) {
			console.log(e.message);
		}

		return resData;
	}

	private async GetRequestParams() {
		try {
			const response = await this.axios.get("https://bard.google.com", {
				headers: {
					Cookie: this.cookies,
				},
			});
			let $ = load(response.data);
			let script = $("script[data-id=_gd]").html();
			script = script.replace("window.WIZ_global_data", "googleData");
			const context = { googleData: { cfb2h: "", SNlM0e: "" } };
			vm.createContext(context);
			vm.runInContext(script, context);
			const at = context.googleData.SNlM0e;
			const bl = context.googleData.cfb2h;
			return { at, bl };
		} catch (e: any) {
			console.log(e.message);
		}
	}

	public async ask(prompt: string, conversationId?: string) {
		// return await this.askStream((data) => {}, prompt, conversationId);
		let resData = await this.send(prompt, conversationId);
		return resData[0];
	}

	public async askStream(data: (arg0: string) => void, prompt: string, conversationId?: string) {
		let resData = await this.send(prompt, conversationId);
		let responseChunks = resData[0].split(" ");
		for await (let chunk of responseChunks) {
			if (chunk === "") continue;
			data(`${chunk} `);
			await Wait(Random(25, 250)); // simulate typing
		}
		return resData[0];
	}

	private async send(prompt: string, conversationId?: string) {
		await this.waitForLoad();
		let conversation = this.getConversationById(conversationId);
		try {
			let { at, bl } = await this.GetRequestParams();
			const response = await this.axios.post(
				"https://bard.google.com/_/BardChatUi/data/assistant.lamda.BardFrontendService/StreamGenerate",
				new URLSearchParams({
					at: at,
					"f.req": JSON.stringify([null, `[[${JSON.stringify(prompt)}],null,${JSON.stringify([conversation.c, conversation.r, conversation.rc])}]`]),
				}),
				{
					headers: {
						Cookie: this.cookies,
					},
					params: {
						bl: bl,
						rt: "c",
						_reqid: "0",
					},
				},
			);

			// let cookies = response.headers["set-cookie"];

			// if (cookies) this.cookies = cookies.join("; ");

			let parsedResponse = this.ParseResponse(response.data);
			conversation.c = parsedResponse.c;
			conversation.r = parsedResponse.r;
			conversation.rc = parsedResponse.rc;

			return parsedResponse.responses;
		} catch (e: any) {
			console.log(e.message);
		}
	}
}

export default Bard;
