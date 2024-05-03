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

// Listen for incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  // Handle commands
  if (messageText.startsWith('/start')) {
      bot.sendMessage(chatId, 'Welcome to Teagram! How can I assist you with tea-related information?');
  } else if (messageText.startsWith('/brew')) {
      // Implement your tea brewing logic here
      bot.sendMessage(chatId, 'Brewing a delightful cup of tea...');
  } else if (messageText.startsWith('/about')) {
      // Provide information about Teagram
      bot.sendMessage(chatId, 'Teagram is a Telegram bot dedicated to all things tea! Explore commands like /brew and /about.');
  } else if (messageText.startsWith('/help')) {
      // Display available commands
      bot.sendMessage(chatId, 'Available commands:\n/start - Start using Teagram\n/brew - Brew a cup of tea\n/about - Learn about Teagram\n/help - Show available commands');
  } else {
      // Handle other messages
      bot.sendMessage(chatId, 'I appreciate your enthusiasm for tea! Feel free to explore more commands.');
  }
});

// Handle errors
bot.on('polling_error', (error) =>