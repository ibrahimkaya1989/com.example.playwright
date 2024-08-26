const { chromium } = require('playwright'); // Import Playwright

(async () => {
    // Launch a Chromium browser
    const browser = await chromium.launch({ 
        headless: false, // Set to false to see the browser
        args: [
            '--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36 OPR/70.0.3728.189"', // Opera User-Agent string
        ]
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a website
    await page.goto('https://example.com');

    // Take a screenshot of the page
    await page.screenshot({ path: 'opera-example-screenshot.png' });

    // Close the browser
    await browser.close();
})();
