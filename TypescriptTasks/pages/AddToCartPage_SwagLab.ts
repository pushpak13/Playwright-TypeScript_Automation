import { Page} from "@playwright/test";
import AssertionPage from "../utils/AssertionPage";
let page: Page
//let assert: AssertionPage;


export default class AddToCartPage_SwagLab {

    private page: Page;
    constructor(page: Page){
        this.page = page;
    }

    public get sortPriceToLoHi() {
        return this.page.selectOption("//select[@class='product_sort_container']", 'lohi');
    }

    public get clickAddToCart() {
        return this.page.locator("(//button[text()='Add to cart'])").nth(0);
    }

    public get clickCartLink() {
        return this.page.locator("//a[@class='shopping_cart_link']");
    }

    public get clickContinueShopping() {
        return this.page.locator("button[name='continue-shopping']");
    }

    public get clickRemoveProduct() {
        return this.page.locator("//button[text()='Remove']");
    }

    public get clickCheckout() {
        return this.page.locator("button[name='checkout']");
    }
     
    public async AddToCart() {
        await this.sortPriceToLoHi;
        await this.clickAddToCart.click();
        await this.clickCartLink.click();
       
    }

    public async goToContinueShoppingLink() {
        await this.clickContinueShopping.click();

    }

    public async goToCartPage() {
        await this.clickCartLink.click();
        await this.clickRemoveProduct.click();

    }

    public async checkoutCartPage() {
        await this.clickCheckout.click();

    }


}