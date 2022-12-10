import {test, expect, Page, BrowserContext, Browser, chromium} from "@playwright/test";
import HomePage from "../pages/HomePage";
import HomePage_SwagLab from "../pages/HomePage_SwagLab";
import LoginPage from "../pages/LoginPage";
import MenuPage_SwagLab from "../pages/MenuPage_SwagLab";
import AssertionPage from "../utils/AssertionPage";
import envConfig from "../utils/envConfig";

test.describe("Menu Tests", async() =>{
   let page: Page;
   let login: LoginPage;
   let home: HomePage_SwagLab;
   let browser: Browser;
   let context: BrowserContext;
   let assert: AssertionPage;
   let menu: MenuPage_SwagLab;
   
   test.beforeAll(async() => {
      browser = await chromium.launch({
         headless: false
      });
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto(envConfig.baseUrl);
      login = new LoginPage(page);
      home = new HomePage_SwagLab(page);
      assert = new AssertionPage(page);
      menu = new MenuPage_SwagLab(page);
     
   });
   
   test.afterAll(async({browser}) => {
      await browser.close();
   })

   test("Menu_Items_Swag_Lab_Test", async() => {
    await login.login();
    await home.verifyProductHomePage();
    await menu.MenuItems_AllItems_RestartApp_Logout();
    await login.login();
    await menu.aboutMenu();

   })
})