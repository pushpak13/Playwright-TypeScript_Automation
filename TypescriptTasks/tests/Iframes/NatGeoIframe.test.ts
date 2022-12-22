import {test, Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import locators from "../../utils/locators";

test.describe("IFrames_Tests_NatGeo", async() => {
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

  test("Iframe_02_Test_Scenarios",async () => {
    await page.waitForLoadState();
    await page.mouse.wheel(0,100);
    await page.click(locators.locator_iframeTab);
    await page.waitForLoadState();
    await expect(page).toHaveURL(envConfig.iframes_Url);
    const frame = await page.frameLocator(locators.locator_iframe2);
    const loginIframe = frame.frameLocator(locators.locator_loginIframe);
    const pageTitle = await frame.locator(locators.locator_natGeoLink).getAttribute("title");
    console.log(pageTitle);
    //Login
    await frame.locator(locators.locator_login).click();
    await loginIframe.locator(locators.locator_email).fill(envConfig.natGeoemail);
    await loginIframe.locator(locators.locator_continueBtn).click();
    await loginIframe.locator(locators.locator_password).fill(envConfig.natGeoPassword);
    await loginIframe.locator(locators.locator_signInBtn).click();
    await loginIframe.locator(locators.locator_tryLaterBtn).click();
    //Goto Menu
    await frame.locator(locators.locator_menuBtn).click();
    await frame.locator(locators.locator_topic).click();
    await expect(frame.locator(locators.locator_topicPageTitle)).toContainText("Animals");
    await page.waitForLoadState();
    //Goto Newsletter Tab
    await frame.locator(locators.locator_newsLetterTab).click();
    await expect(frame.locator(locators.locator_newsLetterPageTitle)).toHaveText("Sign Up for National Geographic Newsletters");
    //Search Icon
    await frame.locator(locators.locator_searchIcon).click();
    await frame.locator(locators.locator_searchField).fill("Science");
    await frame.locator(locators.locator_searchBtn).click();
    const[page1] = await Promise.all([
      page.waitForEvent('popup'),
      await frame.locator(locators.locator_searchItemLink).click()
    ])
    await expect(page1).toHaveURL(envConfig.sciencePage_Url);
    console.log(page1.url);
    
  })

})