import {test, Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import locators from "../../utils/locators";;

test.describe("Carousels_Test", async() => {
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

  test("Carousel_Test_Scenario",async () => {
    await page.waitForLoadState();
    await page.locator(locators.locator_carouselTab).click();
    await page.waitForLoadState();
    await expect(page).toHaveURL(envConfig.carousel_Url);
    await expect(page).toHaveTitle("Carousel | automateNow");
    let carouselCount = await page.locator('.swiper-slide').count();
    console.log("Total No of slides: " + carouselCount);
    let activeSlide = await page.locator('div.active').count() + 1;
    console.log("No of active slide: " + activeSlide);
    for(let i=0; i<carouselCount; i++) {
        let index = i+1;
        await page.click(locators.locator_nextBtn);
        console.log("No of active slide after click: " + activeSlide);
        console.log("Index of active slide: " + index);
        
    }

    
    
    
    
  })

})