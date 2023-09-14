# Instagram Bot using Node.js and Puppeteer

This project is an Instagram bot designed to like posts based on specific tags provided by the user. The bot logs in, navigates to the specified tags, and likes relevant posts.

## Features

- **Tag-Based Liking**: The bot can like posts associated with user-specified tags.
- **Login Functionality**: Users must provide their Instagram credentials for authentication.
- **Headless Browser**: The bot uses Puppeteer, a headless Chrome browser, to interact with the Instagram website.
- **Customizable Settings**: Users can customize liking behavior, such as the number of posts to like and the time interval between likes.

## Prerequisites

Before running the bot, ensure you have the following:

- Node.js installed on your system.
- Instagram credentials (username and password).
- Basic knowledge of JavaScript and Node.js.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/itxTouseef74/Instagram-Bot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd instagram-bot
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Configuration

1. Open the `index.js` file.

2. Add your Instagram credentials:

   ```javascript
  
       username: 'your_username',
       password: 'your_password',

   };
   ```

   Ensure that you keep your credentials secure and do not share them publicly.

## Usage

1. Start the bot:

   ```bash
   node index.js
   ```

2. The bot will prompt you to enter the tags you want to search for.

3. The bot will then log in, search for posts based on the specified tags, and like them.


## Important Note

- Be cautious when using this bot to interact with Instagram. Automated actions on the platform may violate Instagram's terms of service. Use this bot responsibly and consider the implications of automating interactions.

## Dependencies

- Node.js
- Puppeteer

## Acknowledgments

- This project was created to showcase automating interactions on Instagram using Node.js and the Puppeteer library.
