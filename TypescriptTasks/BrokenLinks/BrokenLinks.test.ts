import{test, Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import locators from "../../utils/locators";

test.describe("BrokenLinks_Test", async() => {
  let page: Page;
  let browser: Browser;
  let context: BrowserContext;
   
  test.beforeAll(async({browser}) => {
    context = await browser.newContext();
    page = await browser.newPage();
    await page.goto(envConfig.automateNowUrl);

  })

  test.afterAll(async({browser}) => {
    await browser.close();
  })

  test("BrokenLinks_Test", async({request}) => {
    test.fail();
    await page.waitForLoadState();
    await page.click(locators.locator_brokenLinksTab);
    await expect(page).toHaveURL(/.*broken-links/);
    await page.click(locators.locator_clickMe);
    await page.waitForLoadState();
    expect(await page.locator(locators.locator_brokenLinkMsg).innerText()).toBe("This site can’t be reached");
    const response = await request.get("https://automatenow.iot/");
    console.log(response)
  })

})