import { Bard } from "../dist/index.js";
import { config } from "dotenv";
import readline from "readline";

config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cookies = `NID=; SID=; __Secure-1PSID=; __Secure-3PSID=; HSID=; SSID=; APISID=; SAPISID=; __Secure-1PAPISID=; __Secure-3PAPISID=; SIDCC=; __Secure-1PSIDCC=; __Secure-3PSIDCC=`;

let bot = new Bard(cookies, {
  proxy: {  // optional
    host: process.env.PROXY_HOST,
    port: process.env.PROXY_PORT,
    auth: {
      username: process.env.PROXY_USERNAME,
      password: process.env.PROXY_PASSWORD
    },
    protocol: process.env.PROXY_PROTOCOL
  }
});

async function main() {
  while (true) {
    let prompt = await new Promise((resolve) => {
      rl.question("You: ", (answer) => {
        resolve(answer);
      });
    });

    process.stdout.write("Google Bard: ");
    await bot.askStream(res => {
      process.stdout.write(res.toString());
    }, prompt);
    console.log();
  }
}

main();