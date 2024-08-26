const { firefox } = require('playwright'); // Import Playwright

(async () => {
    // Launch a Firefox browser
    const browser = await firefox.launch({ headless: false }); // Set headless to false to see the browser
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a website
    await page.goto('https://example.com');

    // Take a screenshot of the page
    await page.screenshot({ path: 'firefox-example-screenshot.png' });

    // Close the browser
    await browser.close();
})();
