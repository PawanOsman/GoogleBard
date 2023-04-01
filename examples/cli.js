import { Bard } from "../dist/index.js";
import { config } from "dotenv";
import readline from "readline";

config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cookies = `__Secure-1PSID=`;

let yourConversationObject = `{"conversationId":"c_93c9fbe53c884882","requestId":"r_93c9fbe53c884b3b","responseId":"rc_93c9fbe53c884279","responses":["It is a pleasure to meet you, Eris. I am Bard.","Eris","It is a pleasure to meet you, Eris. I am Bard.","It is a pleasure to meet you, Eris! I am Bard. What can I help you with today?","Hello Eris! It's a pleasure to meet you. I'm Bard."]}`

let conversationObject = {}

if (yourConversationObject) {
  conversationObject = JSON.parse(yourConversationObject)
  console.log(`Your conversation object was loaded! The new object is ${JSON.stringify(conversationObject)}`)
}

let bot = new Bard(cookies);

async function main() {
  while (true) {
    let prompt = await new Promise((resolve) => {
      rl.question("You: ", (answer) => {
        resolve(answer);
      });
    });

    process.stdout.write("Google Bard: ");
    conversationObject = await bot.ask(prompt, conversationObject)
      process.stdout.write(conversationObject.responses[0]);
      console.log()
    process.stdout.write(`Conversation object: ${JSON.stringify(conversationObject)}`)
    console.log();
  }
}

main();