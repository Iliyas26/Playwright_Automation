import {expect, test} from "@playwright/test";

// Test for interacting with windows
test("Interact with Windows", async ({page}) => {
    // Navigate to the window popup modal demo
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    
    // Wait for the new window to open and click the link
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);
    console.log(newWindow.url());
    newWindow.close();

    // Wait for multiple windows to open and click the link
    const [multipleWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ]);

    await multipleWindow.waitForLoadState();
    const pages = multipleWindow.context().pages();

    // Log the URLs of all opened tabs
    pages.forEach(tab =>{
        console.log(tab.url())
    });
    // the zero index is the main page
    // to work with exact page, we ight need for loop and get url with respect to index and save it in variable and work.   

    await page.waitForTimeout(3000);
});