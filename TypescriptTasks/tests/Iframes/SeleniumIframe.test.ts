import {test, Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import locators from "../../utils/locators";

test.describe("IFrames_Tests_Selenium", async() => {
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
    
//SeleniumPage
  test("Iframe_01_Test_Scenarios",async () => {
    await page.waitForLoadState();
    await page.mouse.wheel(0,100);
    await page.click(locators.locator_iframeTab);
    await page.waitForLoadState();
    await expect(page).toHaveURL(envConfig.iframes_Url);
    await page.mouse.wheel(0,500);
    const frame = await page.frameLocator(locators.locator_iframe1);
    const pageTitle = await expect(frame.locator("//*[@id='selenium_logo']/title")).toHaveText("Selenium")
    console.log(pageTitle);
    //Search Functionality
    await frame.locator(locators.locator_search).click();
    await frame.locator(locators.locator_searchBar).fill("Selenium");
    await frame.locator(locators.locator_searchDoc).click();
    await expect(frame.locator(locators.locator_seleniumDocHeader))
      .toHaveText("The Selenium Browser Automation Project");
    //Navigation to About Page
    await frame.locator(locators.locator_aboutDropdown).click();
    await frame.locator(locators.locator_aboutSeleniumItem).click();
    await expect(frame.locator(locators.locator_aboutSeleniumHeader))
    .toHaveText("About Selenium");




    
  })  


})