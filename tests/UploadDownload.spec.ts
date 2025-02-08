import {expect, test} from "@playwright/test";

// Test for downloading files
test("Download files", async ({ page }) => {
    // Navigate to the file generation page
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");

    // Focus on the input field and type the text
    await page.focus("#textbox");
    await page.keyboard.type("Like, Share, comment & subs");

    // Click the create button to generate the file
    await page.click("#create");

    // Wait for the download event
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("#link-to-download")
    ]);

    // Get the suggested filename and save the downloaded file
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);
});

// Test for uploading files
test.only("Upload files", async ({ page }) => {
    // Navigate to the file upload demo page
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    // Wait for the file chooser event and click the file input
    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("input[type='file']")
    ]);

    // Check if multiple files can be uploaded
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);

    // Set the files to be uploaded
    await uploadFiles.setFiles([
        "Lambdainfo.txt"
    ]);
});