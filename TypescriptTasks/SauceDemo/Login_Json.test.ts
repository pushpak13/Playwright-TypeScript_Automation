import {test, expect, Page, BrowserContext, Browser, chromium} from "@playwright/test";
import LoginPage from "../../pages/LoginPage";
import * as testData from "../../testData/login.cred.json";
import envConfig from "../../utils/envConfig";

test.describe("Test cases", async() =>{
   let page: Page;
   let login: LoginPage
   let browser: Browser
   let context: BrowserContext
   test.setTimeout(50000);

   test.beforeAll(async({browser}) => {
      //browser = await chromium.launch({
         headless: false
     // });
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto(envConfig.baseUrl);
      login = new LoginPage(page);
   });
   
   test.afterAll(async({browser}) => {
      await browser.close();
   })
   
   
   
      
      //Positive testing
      //Verify Login test for valid usernames and password
      
         test("LoginTest_Various Credentials", async () => {
         for await(const data of testData.Credentials) {
         await login.loginAction(data.username, data.password);
         } 
         
      
      
   
         
         
         //await page.goto(envConfig.baseUrl)
         //await page.locator('[placeholder="Username"]').type("standard_user");
   
      
         
         //expect(await page.locator("//div[@class='header_secondary_container']"))
         //.toContainText("Products");
      })
     
   
    
      //test("LoginTest_Credentials_02-valid username2 and password",async ({page}) => {
         //await login.loginAction(testData.username_2, testData.password);
         //verify message for locked out user
         //expect(await page.locator("//h3"))
         //.toHaveText("Epic sadface: Sorry, this user has been locked out.");
         
      //})
   
      /*test("LoginTest_Credentials_03-valid username3 and password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.loginAction(testData.username_3, testData.password);
         await page.waitForTimeout(3000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
      })
   
      test("LoginTest_Credentials_04-valid username4 and password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.loginAction(testData.username_4, testData.password);
         await page.waitForTimeout(3000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
        
      })
   
      //Verify Message for Invalid Login
      test("LoginTest_Message For Invalid Login", async({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.loginAction(testData.invalid_username, testData.invalid_password);
         expect(await page.locator("//h3"))
         .toHaveText("Epic sadface: Username and password do not match any user in this service");
   
      })
   
   
      //Negative testing
      //Verify Login test for invalid username and valid password
      test("LoginTest_Credentials_05-Invalid username and valid password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.enterUsername(testData.Credentials5.wrong_username);
         await login.enterPassword(testData.Credentials5.password);
         await login.clickLoginBtn();
         await page.waitForTimeout(3000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
   
      })
   
      //Verify login test for valid usernames and invalid password
      test("LoginTest_Credentials_06- valid username1 and invalid password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.enterUsername(testData.Credentials6.username1);
         await login.enterPassword(testData.Credentials6.wrong_password);
         await login.clickLoginBtn();
         await page.waitForTimeout(1000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
         
      })
   
      test("LoginTest_Credentials_07-valid username2 and invalid password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.enterUsername(testData.Credentials7.username2);
         await login.enterPassword(testData.Credentials7.wrong_password);
         await login.clickLoginBtn();
         await page.waitForTimeout(1000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
         
      })
   
      test("LoginTest_Credentials_08-valid username3 and invalid password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.enterUsername(testData.Credentials8.username3);
         await login.enterPassword(testData.Credentials8.wrong_password);
         await login.clickLoginBtn();
         await page.waitForTimeout(1000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
         
      })
   
      test("LoginTest_Credentials_09- valid username4 and invalid password",async ({page}) => {
         const login = new LoginPage(page);
         await page.goto("https://www.saucedemo.com/");
         await login.enterUsername(testData.Credentials9.username4);
         await login.enterPassword(testData.Credentials9.wrong_password);
         await login.clickLoginBtn();
         await page.waitForTimeout(1000);
         expect(await page.locator("//div[@class='header_secondary_container']"))
         .toContainText("Products");
         
      })*/
   
   
    
})
