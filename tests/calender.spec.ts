import {expect, test} from "@playwright/test";
import moment from "moment";

// Test for interacting with the calendar
test("Interact with Calendar", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    
    let date = "1994-09-10"

    await page.fill("#birthday", date)
    await page.waitForTimeout(3000);
})

// Test for interacting with the calendar using movement
test("Interact with Calendar using movement", async ({page}) => {
    // Navigate to the date picker demo page
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    // Function to select a date
    async function selectDate() {
        // Click on the input field for the start date
        await page.click("//input[@placeholder='Start date']");

        // Define locators for the date picker elements
        const mmYY = page.locator("//table[@class='table-condensed']//th[@class='datepicker-switch'][1]");
        const prev = page.locator("//table[@class='table-condensed']//th[@class='prev'][1]").nth(0);
        const next = page.locator("//table[@class='table-condensed']//th[@class='next'][1]").nth(0);

        // Click on the previous month button
        await prev.click();

        // Click on the specific day (4th day of the month)
        await page.click("//td[@class='day'][text()='4']");
    }

    // Function to select a date using moment.js
    async function selectDateWithMoment(dateToSelect: string) {
        // Click on the input field for the start date
        await page.click("//input[@placeholder='Start date']");

        // Define locators for the date picker elements
        const mmYY = page.locator("//table[@class='table-condensed']//th[@class='datepicker-switch'][1]").nth(0);
        const prev = page.locator("//table[@class='table-condensed']//th[@class='prev'][1]").nth(0);
        const next = page.locator("//table[@class='table-condensed']//th[@class='next'][1]").nth(0);

        // Check if the selected month is before the current month
        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
        console.log("this month: " + thisMonth);

        // Loop until the desired month/year is displayed
        while (await mmYY.textContent() != dateToSelect) {
            if (thisMonth) {
                await prev.click(); // Click the previous month button
            } else {
                await next.click(); // Click the next month button
            }
        }
    }

    await selectDateWithMoment("May 2023");
    await page.waitForTimeout(3000);
})