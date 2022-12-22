import {test,Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import * as fs from 'fs';
import { read } from "xlsx";


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

    test.only("Download Sandbox .pdf File",async () => {
        await page.waitForLoadState();
        await page.locator("text=File Download").click();
        await page.locator("//a[text()='Sandbox Download Form - .pdf']").click();
        const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.locator("//a[text()='Download']").click(),
        ])
        await download.failure();
        if(await download.createReadStream===null) {
          console.log("Download failed");
        }
        else{
          console.log("Download successful");
          
        }
        const fileName = download.suggestedFilename();
        const filePath = envConfig.baseDir + `${new Date().toDateString()}` + `_` + fileName;
        const newFile = filePath.replace(fileName, "automateNow.pdf");
        await download.saveAs(newFile);
        expect(fs.existsSync(newFile)).toBeTruthy();
        const content = await fs.promises.readFile(newFile, 'utf-8'); 
        expect(content).toBe("This is a sample .pdf file.")
        
        
    })
    //Verify Download for password protected file with correct password
    test("Download Sandbox .docx File-Password Protected(Provide Correct Password)",async () => {
      await page.waitForLoadState();
      await page.locator("text=File Download").click();
      await page.locator("//a[text()='Sandbox Download Form - .docx']").click();
      await expect(page).toHaveURL('https://automatenow.io/download/file-download-form/');
      await page.locator("//a[text()='Download']").click();
      await page.frameLocator('#wpdm-lock-frame').locator('[placeholder="Enter Password"]')
        .fill(envConfig.correctPassword);
      const [popup, download] = await Promise.all([
        page.waitForEvent('popup'),
        page.waitForEvent('download'),
        page.frameLocator('#wpdm-lock-frame').locator('text=Submit').click(),
      ]);
      const fileName = download.suggestedFilename();
      const filePath = envConfig.baseDir + `${new Date().toDateString()}` + `_` + fileName;
      const newFile = filePath.replace(fileName, "automateNow.docx");
      await download.saveAs(newFile);
      expect(fs.existsSync(newFile)).toBeTruthy();
      const content = await fs.promises.readFile(newFile, 'utf-8'); 
      expect(content).toBe("This is a sample .docx file.")
      
    })
    //Verify Download for password protected file with wrong password
    test("Download Sandbox .docx File-Password Protected(Provide Wrong Password)",async () => {
      await page.waitForLoadState();
      await page.locator("text=File Download").click();
      await page.locator("//a[text()='Sandbox Download Form - .docx']").click();
      await expect(page).toHaveURL('https://automatenow.io/download/file-download-form/');
      await page.locator("//a[text()='Download']").click();
      await page.frameLocator('#wpdm-lock-frame').locator('[placeholder="Enter Password"]')
      .fill(envConfig.wrongPassword);
      await page.frameLocator('#wpdm-lock-frame').locator('text=Submit').click();
      await page.waitForTimeout(2000);
      const errorMsg = await expect(page.frameLocator('#wpdm-lock-frame').locator("#msg_921"))
      .toContainText("Wrong Password! Try Again");
      
    })


})