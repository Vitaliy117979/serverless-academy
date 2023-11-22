import { Command } from "commander";
import { getChatId, sendTextMessage, sendPhoto } from "./src/telegramBot.mjs";
const commander = new Command();

commander
  .command("send-message <message>")
  .alias("m")
  .description("Send a message to the Telegram bot")
  .action((message) => {
    getChatId((chatId) => {
      return sendTextMessage(chatId, message);
    });
  });

commander
  .command("send-photo <path>")
  .alias("p")
  .description("Send a photo to the Telegram bot")
  .action((path, options) => {
    const chatId = options.chatId;
    sendPhoto(chatId, path);
    console.log("Photo sent successfully!");
  });

commander.parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
