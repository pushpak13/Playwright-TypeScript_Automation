import { expect, Page } from "@playwright/test";
import AssertionPage from "../utils/AssertionPage";
import envConfig from "../utils/envConfig";
let page: Page;

export default class MenuPage_SwagLab{

    private page: Page;
    public constructor(page: Page) {
        this.page = page;

    }

    public get clickOpenMenu() {
        return this.page.locator("#react-burger-menu-btn");
    }

    public get clickLogoutLink() {
        return this.page.locator("#logout_sidebar_link");
    }

    public get clickErrorBtn() {
        return this.page.locator("//button[@class='error-button']");
    }

    public get clickAllItemsLink() {
        return this.page.locator("#inventory_sidebar_link");
    }

    public get clickAboutLink() {
        return this.page.locator("#about_sidebar_link");
    }

    public get clickResetAppStateLink() {
        return this .page.locator("#reset_sidebar_link");
    }

    public get clickMenuCloseBtn() {
        return this.page.locator("#react-burger-cross-btn");
    }

    public get hoverCompanyLink() {
        return this.page.locator("//a[@class='link'][text()='Company']").nth(1);
    }

    public get clickAboutUsLink() {
        return this.page.locator("//a[@class='link']/span[text()='About Us']").nth(1);
    }

    public async MenuItems_AllItems_RestartApp_Logout() {
        await this.clickOpenMenu.click();
        await this.clickAllItemsLink.click();
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await this.clickMenuCloseBtn.click();
        await this.clickOpenMenu.click();
        await this.clickResetAppStateLink.click();
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await this.clickMenuCloseBtn.click();
        await this.clickOpenMenu.click();
        await this.clickLogoutLink.click();
        await expect(this.page).toHaveURL(envConfig.baseUrl);
    
        
    }

    public async aboutMenu() {
        await this.clickOpenMenu.click();
        await this.clickAboutLink.click();
        await this.hoverCompanyLink.hover();
        await this.clickAboutUsLink.click();
        await expect(this.page.locator("//h3").nth(0)).toContainText("About");
        
    }


}