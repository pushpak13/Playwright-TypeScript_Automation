import { expect, test } from "@playwright/test"; 
import * as moment from "moment";

test("Simple Date Fill", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date  = "1988-03-13";
    await page.fill("#birthday", date);
    await page.waitForTimeout(3000);
})

test.only("Calender Using Moment", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await selectDate(13, "March 2018");
    await page.reload();

    await selectDate(26, "November 2024");
    await page.reload();

    await selectDate(4, "August 2022");
    await page.reload();

    async function selectDate(date:number, dateSelect:string) {
        await page.click("//input[@placeholder='Start date']");     
        const mmYY = await page.locator("(//th[@class='datepicker-switch'])[1]");
        const next = await page.locator("(//th[@class='next'])[1]");
        const prev = await page.locator("(//th[@class='prev'])[1]");

        //let dateSelect = "March 2019";
        const thisMonth = moment(dateSelect, "MMMM YYYY").isBefore();
        console.log("this month? " + thisMonth);
        while(await mmYY.textContent() != dateSelect) {
          if(thisMonth){
            await prev.click();
          }else{
            await next.click();
        }
    }
    await page.click(`//td[@class='day'][text()='${date}']`);
    //await page.waitForTimeout(3000);

  }

})