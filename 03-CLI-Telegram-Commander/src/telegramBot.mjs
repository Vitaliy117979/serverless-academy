import TelegramBot from "node-telegram-bot-api";

const token = "6883984135:AAGJwrodoxbBOWUWycrJr6CYdmPwsXhqerA";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

export  const getChatId =  (callback) => {
  console.log("Please click on the /start command in our Telegram chat, to continue");
  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    callback(chatId);
  });
};
export const  sendTextMessage = (chatId, message) => {
  bot.sendMessage(chatId, message);
 return console.log("Message sent successfully!");
};
export const sendPhoto = (chatId, path) => {
  bot.sendPhoto(chatId, path);
};
