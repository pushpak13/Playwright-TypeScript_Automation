import{test, Page, Browser, BrowserContext, expect} from "@playwright/test";
import envConfig from "../../utils/envConfig";
import locators from "../../utils/locators";
import windowsPage from "../../pages/WindowOperationsPage";

test.describe("Windows_Operations_Test",async () => {
  let page: Page;
  let browser: Browser;
  let context: BrowserContext;
  let windows: windowsPage;
  
test.beforeAll(async({browser}) => {
  context = await browser.newContext();
  page = await browser.newPage();
  await page.goto(envConfig.automateNowUrl);
  windows = new windowsPage(page);

})

test.afterAll(async({browser}) => {
  await browser.close();

})

test("Test_NewTab",async () => {
  await windows.windowPage();
  //Click to open a new browser tab.
  const[newPage] = await Promise.all([
  context.waitForEvent('page'),
  await page.click(locators.locator_newTabBtn)

])
  await newPage.waitForLoadState();
  expect(newPage.url()).toBe(envConfig.google_url);
  console.log(newPage.url());
    
})

test.only("Test_ReplaceWindow",async () => {
  await windows.replacePageUrl();
    
})

test("Test_NewWindow",async () => {
  await windows.windowPage();
  const[newWindow] = await Promise.all([
  page.waitForEvent('popup'),
  await page.click(locators.locator_newWindowBtn)
 ])
  await newWindow.waitForLoadState();
  await expect(newWindow.url()).toBe(envConfig.google_url);
  console.log(newWindow.url());
    
})

    
})
