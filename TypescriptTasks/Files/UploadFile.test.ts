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

    test.only("UploadFile(Any of the Supported type)",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles("info.txt");
          await page.click("input[value='Upload It!']");
          await expect(page.locator("//div[text()='File upload complete']")).toHaveText("File upload complete")
   
  })

    //To verify upload file functionality w.r.t to size condition
    //File size of 1MB
    test("Upload file of size 1MB",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_1MB);
          await page.click("input[value='Upload It!']");
          const successMsg = await page.locator("//div[@class='wpcf7-response-output']");
          if(expect(successMsg).toHaveText("File upload complete")) {
            console.log("File uploaded successfully");
          } else{
            console.log("File upload failed");
          }

          
    })
    //More than 1MB
    test("Upload file more than 1MB ",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_greaterthan_1MB);
          await page.click("input[value='Upload It!']");
          const fileSizeMsg = await page.locator("//span[@class='wpcf7-not-valid-tip']");
          if(expect(fileSizeMsg).toHaveText("Uploaded file is too big.")) {
            console.log("File upload not allowed for more than 1MB");
          }else{
            console.log("File upload allowed");
          }
          const errorMsg = await page.locator("//div[@class='wpcf7-response-output']");
          if(expect(errorMsg).toHaveText("One or more fields have an error. Please check and try again.")) {
            console.log("File upload failed");
          }else{
            console.log("File upload successful");
          }

    })

    //Verify file upload for unsupported file type
    test("Upload file of unsupported file type ",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Upload").click();
        const [uploadFile] = await Promise.all([
            page.waitForEvent("filechooser"),
            page.click("//input[@type='file']")
          ])
          uploadFile.setFiles(envConfig.filePath_unSupported_fileType);
          await page.click("input[value='Upload It!']");
          const warningMsg = await page.locator("//span[@class='wpcf7-not-valid-tip']");
          if(expect(warningMsg).toHaveText("You are not allowed to upload files of this type.")) {
            console.log("File upload not allowed for unsupported file type");
          }else{
            console.log("File upload allowed");
          }
          const errorMsg = await page.locator("//div[@class='wpcf7-response-output']");
          if(expect(errorMsg).toHaveText("One or more fields have an error. Please check and try again.")) {
            console.log("File upload failed");
          }else{
            console.log("File upload successful");
          }

    })

})
    
  
