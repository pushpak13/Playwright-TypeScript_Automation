import {Browser, BrowserContext, Page, test, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";

test.describe("UploadFile", async() => {
  let page: Page;
  let browser: Browser;
  let context: BrowserContext;

    test.beforeAll(async({browser}) => {
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto(envConfig.automateNowUrl);

    })

    test.afterAll(async({browser}) => {
       await browser.close();
    })

    test("UploadFile(Any of the Supported type)",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_txt_file);
          await page.click("input[value='Upload It!']");
          await expect(page.locator("//*[@class='wpcf7-response-output']")).toHaveText("File upload complete");
   
  })

    //To verify upload file functionality w.r.t to File Size
    //File size of 1MB-Test should upload file
    test.only("Upload file of size 1MB",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_1MB);
          await page.click("input[value='Upload It!']");
          await expect(page.locator("//*[@class='wpcf7-response-output']")).toHaveText("File upload complete");
   
          

          
    })
    //More than 1MB-Test should not upload file
    test("Upload file more than 1MB ",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_greaterthan_1MB);
          await page.click("input[value='Upload It!']");
          await page.waitForTimeout(10000);
          await expect(page.locator("//*[@class='wpcf7-not-valid-tip']")).toHaveText("Uploaded file is too big.");
          await expect(page.locator("//*[@class='wpcf7-response-output']")).toHaveText("One or more fields have an error. Please check and try again.")

    })

    //Verify file upload for unsupported file type-Test should not upload file
    test("Upload file of unsupported file type ",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_unSupported_fileType);
          await page.click("input[value='Upload It!']");
          await expect(page.locator("//*[@class='wpcf7-not-valid-tip']")).toHaveText("You are not allowed to upload files of this type.");
          await expect(page.locator("//*[@class='wpcf7-response-output']")).toHaveText("One or more fields have an error. Please check and try again.")


    })

})
    
  
