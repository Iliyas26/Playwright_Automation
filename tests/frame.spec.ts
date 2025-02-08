import {expect, test} from "@playwright/test";

// Test for interacting with frames
test("Interact with frame", async ({page}) => {
    // Navigate to the frame demo page
    await page.goto("https://letcode.in/frame")
    const allframe = page.frames()
    console.log("No.of frames "+ allframe.length)

    // Interact with the first frame
    const myFrame = page.frame("firstFr")
    await myFrame?.fill("input[name='fname']","UserName")
    await myFrame?.fill("input[name='lname']","SurName")

    // Verify the entered information
    expect(await myFrame?.locator("p.has-text-info").textContent())
    .toContain("You have entered UserName SurName")

    // Interact with an inner frame
    const innerFrame = myFrame?.frameLocator("iframe[src='innerFrame']")
    innerFrame?.locator("input[name='email']").fill("email@gmail.com")

    await myFrame?.fill("input[name='fname']","Letcode")

    await page.waitForTimeout(3000);
});