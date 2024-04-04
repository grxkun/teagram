// teagram.js
require('dotenv').config();
const { ethers } = require('ethers');
const TelegramBot = require('node-telegram-bot-api');

const sepoliaRpcUrl = process.env.SEPOLIA_RPC_URL;
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;

// Initialize Sepolia provider
const provider = new ethers.providers.JsonRpcProvider(sepoliaRpcUrl);

// Initialize Telegram bot
const bot = new TelegramBot(telegramBotToken, { polling: true });

// Example: Get Sepolia block number
provider.getBlockNumber().then((blockNumber) => {
  bot.sendMessage('@your_channel', `Sepolia Block Number: ${blockNumber}`);
});

// Example: Listen for Telegram messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello from Teagram!');
});
