import {expect, Page} from "@playwright/test";
import envConfig from "../utils/envConfig";
export default class AssertionPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;

    }
   
        async verifyLoginFailureForLockedOutUser() {
            expect.soft(await this.page.locator("//h3"))
             .toHaveText("Epic sadface: Sorry, this user has been locked out.");
    
        }
    
        async verifyProductHomePage() {
            expect(await this.page.locator("//div[@class='header_secondary_container']"))
             .toContainText("Products");
        }
    
        async verifyLoginFailureForInvalidCredentials() {
            expect.soft(await this.page.locator("//h3"))
             .toHaveText("Epic sadface: Username and password do not match any user in this service");
        }
    
        async verifyProductInHomePage() {
            const productInHome = await this.page.locator("//div[@class='inventory_item_label']");
            expect(productInHome.textContent()).toContain("Sauce Labs Onesie");
            const productPriceHome = await this.page.locator("//div[@class='inventory_item_price']");
            expect(productPriceHome.textContent()).toContain("$7.99");
    
        }
    
        async verifyProductCartPage() {
            //verify Product Cart page title
            const productPage = expect(await this.page.locator("//span[@class='title']"));
            if(productPage.toHaveText("Your Cart")) {
                console.log("Navigated to Product Cart Page")
            } else {
                console.log("Navigation to Cart Page failed");
            }
            //verify Product added to Cart with Price and quantity
            const productInCart = expect(await this.page.locator("//div[@class='inventory_item_name']"));
            if(productInCart.toHaveText("Sauce Labs Onesie")) {
                console.log("Right Product in Cart")
            } else {
                console.log("Wrong Product")
            }
            const cartProductQty = await this.page.locator("//div[@class='cart_quantity']").allTextContents();
            const cartLinkBadge = await this.page.locator("//span[@class='shopping_cart_badge']").allTextContents();
            console.log(cartProductQty.length);
            console.log(cartLinkBadge.length);
            if(cartProductQty.length==cartLinkBadge.length) {
                console.log("Product quantity matches to Shopped quantity");
            }else {
                console.log("Quantity mismatch");
            }
            const productPriceCart = expect(await this.page.locator("//div[@class='inventory_item_price']"));
            if(productPriceCart.toHaveText("$7.99")) {
                console.log("Price Matching")
            } else {
                console.log("Price not matching")
            }
    
        }
    
        async verifyNavigationContinueShoppingLink() {
            await expect(this.page).toHaveURL(/.*inventory.html/);
            
        }
   
        async verifyPageAfterCheckout() {
            await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
        }

        async verifyPageAfterLogout() {
            await expect(this.page).toHaveURL(envConfig.baseUrl);
        }

        async verifyAboutPage() {
           
            
        }

    }
    

    

    

    

    

