import envConfig from "../utils/envConfig";
import test, {describe, expect} from "./BasePages";

describe("SauceDemo_Test", async() => {

  test.beforeEach(async({page}) => {
    await page.goto(envConfig.baseUrl);
    })
    
  test("AddToCart_Test",async ({page, loginPage, homePage, addToCartPage, assert}, testInfo) => {
    await loginPage.login(envConfig.username, envConfig.password);
    await homePage.verifyProductHomePage();
    await addToCartPage.AddToCart();
    await assert.verifyProductCartPage();
    const screenshot = await page.screenshot();
    await testInfo.attach("Add to cart", {
        contentType: "image/png",
        body: screenshot
    })
    await addToCartPage.goToContinueShoppingLink();
    await assert.verifyNavigationContinueShoppingLink();
    await addToCartPage.goToCartPage();
    await addToCartPage.checkoutCartPage();
    await assert.verifyPageAfterCheckout();
    await loginPage.logout();
    await assert.verifyPageAfterLogout();
        
})
    
  test("Menu_SauceDemo_Test",async ({page, loginPage, homePage, addToCartPage, menuPage}, testInfo) => {
    await loginPage.login(envConfig.username, envConfig.password);
    await homePage.verifyProductHomePage();
    await menuPage.MenuItems_AllItems_RestartApp_Logout();
    await loginPage.login(envConfig.username, envConfig.password);
    await menuPage.aboutMenu();
    const screenshot = await page.screenshot();
    await testInfo.attach("About Menu", {
        contentType: "image/png",
        body: screenshot
    })
        
  })
})


