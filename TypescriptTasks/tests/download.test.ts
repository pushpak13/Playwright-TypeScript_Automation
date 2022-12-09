import {test, expect, chromium} from "@playwright/test";
import * as  fs from 'fs';
const baseDir = 'downloads/';

test.describe("File Download", () => {

    test("Download Single File", async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/download');
        const [download] = await Promise.all([
          page.waitForEvent('download'),
          page.locator('text=Manual Testing Notes_221108_103752.pdf').click(),
        ])
        const FileName = download.suggestedFilename();
        const filePath = `${baseDir}` + FileName;
        await download.saveAs(filePath);
        expect(fs.existsSync(filePath)).toBeTruthy();
    })
    
    test("Download Multiple Files",async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/download');
        const files = ["Test_File.txt", "Picture.png", "sample-zip-file.zip"];
        for(const file of files) {
            const [download] = await Promise.all([
                page.waitForEvent('download'),
                page.locator(`text=${file}`).click(),
              ])
              const fileName = download.suggestedFilename();
              const filePath = `${baseDir}` + fileName;
              await download.saveAs(filePath);
              expect(fs.existsSync(filePath)).toBeTruthy();
    
        }
        
     })

})

