const puppeteer = require('puppeteer');

const BASE_URL = 'https://www.instagram.com/';
const TAG_URL = (tag) => `https://www.instagram.com/explore/tags/${tag}/`;

const instagram = {
  browser: null,
  page: null,

  initialize: async () => {
    try {
      instagram.browser = await puppeteer.launch({
        headless: false
      });
      instagram.page = await instagram.browser.newPage();

      await instagram.page.goto(BASE_URL, { waitUntil: 'networkidle2' });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  login: async (username, password) => {
    try {
      await instagram.page.type('input[name="username"]', username, { delay: 50 });
      await instagram.page.type('input[name="password"]', password, { delay: 50 });

      await instagram.page.click('button[type="submit"]');

      await instagram.page.waitForSelector('a > span[aria-label="Profile"]');

      const errorElement = await instagram.page.$('.error-notifications');

      if (errorElement) {
        const errorText = await instagram.page.evaluate(element => element.textContent, errorElement);
        throw new Error(`Login failed: ${errorText}`);
      }

    } catch (error) {
      console.error(error);
    }
  },

  likeTagsProcess: async (tags = []) => {
    try {
      for (let tag of tags) {
        await instagram.page.goto(TAG_URL(tag), { waitUntil: 'networkidle2' });
        await instagram.page.waitForTimeout(2000);

        let posts = await instagram.page.$$('article > div:nth-child(3) img[decoding="auto"]');

        for (let i = 0; i < posts.length; i++) {
          let post = posts[i];
          await post.click();
          
          // Wait for the like button to appear
          await instagram.page.waitForSelector('span[aria-label="Like"]', { timeout: 30000 });
          
          // Check if the post is likable
          let isLikable = await instagram.page.$('span[aria-label="Like"]');
          
          if (isLikable) {
            // Click on the like button
            await instagram.page.evaluate(post => post.click(), isLikable);
            console.log(`Liked post ${i + 1} of tag ${tag}`);
          }

          await instagram.page.waitForTimeout(1000);
          await instagram.page.keyboard.press('Escape');
          await instagram.page.waitForTimeout(1000);
        }

        console.log(`Liked posts for tag: ${tag}`);
        await instagram.page.waitForTimeout(5000);
      }
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = instagram;
