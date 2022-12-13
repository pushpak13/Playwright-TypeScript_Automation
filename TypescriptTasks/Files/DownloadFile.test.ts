import {test,Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import * as fs from 'fs';
const baseDir = 'downloads/';

test.describe("File_Download", async() => {
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

    test("Download Sandbox .pdf File",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Download").click();
        await page.locator("//a[text()='Sandbox Download Form - .pdf']").click();
        const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.locator("//a[text()='Download']").nth(0).click(),
        ])
        const FileName = download.suggestedFilename();
        const filePath = `${baseDir}` + FileName + `_` + `${new Date().toDateString()}`;
        await download.saveAs(filePath);
        expect(fs.existsSync(filePath)).toBeTruthy();
        
    })
    //Verify Download for password protected file with correct password
    test("Download Sandbox .docx File-Password Protected(Provide Correct Password)",async () => {
      await page.waitForLoadState();
      await page.locator("text=File Download").click();
      await page.locator("//a[text()='Sandbox Download Form - .docx']").click();
      await expect(page).toHaveURL('https://automatenow.io/download/file-download-form/');
      await page.locator("//a[text()='Download']").nth(0).click();
      await page.frameLocator('#wpdm-lock-frame').locator('[placeholder="Enter Password"]')
      .fill(envConfig.correctPassword);
      const [popup, download] = await Promise.all([
        page.waitForEvent('popup'),
        page.waitForEvent('download'),
        page.frameLocator('#wpdm-lock-frame').locator('text=Submit').click(),
        
      ]);
      const FileName = download.suggestedFilename();
      const filePath = `${baseDir}` + FileName + `_` + `${new Date().toDateString()}`;
      await download.saveAs(filePath);
      expect(fs.existsSync(filePath)).toBeTruthy();
      
    })
    //Verify Download for password protected file with wrong password
    test("Download Sandbox .docx File-Password Protected(Provide Wrong Password)",async () => {
      await page.waitForLoadState();
      await page.locator("text=File Download").click();
      await page.locator("//a[text()='Sandbox Download Form - .docx']").click();
      await expect(page).toHaveURL('https://automatenow.io/download/file-download-form/');
      await page.locator("//a[text()='Download']").nth(0).click();
      await page.frameLocator('#wpdm-lock-frame').locator('[placeholder="Enter Password"]')
      .fill(envConfig.wrongPassword);
      await page.frameLocator('#wpdm-lock-frame').locator('text=Submit').click();
      const errorMsg = await page.frameLocator('#wpdm-lock-frame').locator('text=Wrong Password! Try Again')
        if(expect(errorMsg).toBeTruthy) {
          console.log("File Download failed due to wrong password")
        }else {
          console.log("File downloaded successfully");
        }
      
    })


})