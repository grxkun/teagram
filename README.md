```
# Teagram

Teagram is a Telegram client written in JavaScript for both Node.js and browsers. It provides an easy-to-use interface for interacting with the Telegram API.

## Features

- Send and receive messages
- Manage chats and contacts
- Access user information
- Perform raw API calls

## Installation

To install Teagram, use npm:

```bash
npm install telegram
```

Additionally, you'll need the `input` package to prompt for login information:

```bash
npm install input
```

## Usage

1. **Obtain API Credentials**:
   - Log in to your Telegram account.
   - Visit "API development tools" and create an application.
   - Note down your API ID and API hash.

2. **Sample Code**:
   - Replace `apiId` and `apiHash` with your actual credentials.
   - Use the following code to send a message to yourself:

   ```javascript
   import { TelegramClient } from "telegram";
   import { StringSession } from "telegram/sessions";
   import input from "input";

   const apiId = 123456; // Your API ID
   const apiHash = "123456abcdfg"; // Your API hash
   const stringSession = new StringSession("");

   (async () => {
     const client = new TelegramClient(stringSession, apiId, apiHash, {
       connectionRetries: 5,
     });

     await client.start({
       phoneNumber: async () => await input.text("Please enter your number: "),
       password: async () => await input.text("Please enter your password: "),
       phoneCode: async () => await input.text("Please enter the code you received: "),
       onError: (err) => console.log(err),
     });

     console.log("You should now be connected.");
     console.log(client.session.save()); // Save this string to avoid logging in again

     await client.sendMessage("me", { message: "Hello!" });
   })();
   ```

3. **Running Teagram in Browsers**:
   - Teagram works well with frontend libraries like React and Vue.
   - When working in browsers, Teagram uses `localStorage` to cache layers.
   - To get a browser bundle of Teagram, use:

   ```bash
   NODE_ENV=production npx webpack
   ```

4. **Raw API Calls**:
   - To use raw Telegram API methods, utilize the `invoke` function:

   ```javascript
   await client.invoke(new RequestClass(args));
   ```

