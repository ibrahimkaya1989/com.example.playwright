const { chromium } = require('playwright'); // Import Playwright

(async () => {
    // Launch a Microsoft Edge browser
    const browser = await chromium.launch({
        headless: false, // Set to false to see the browser
        channel: 'msedge', // Specify the Edge channel
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a website
    await page.goto('https://example.com');

    // Take a screenshot of the page
    await page.screenshot({ path: 'edge-example-screenshot.png' });

    // Close the browser
    await browser.close();
})();
