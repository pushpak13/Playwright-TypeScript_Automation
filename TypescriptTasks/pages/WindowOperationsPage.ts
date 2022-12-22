import { Page, expect } from "@playwright/test";
import locators from "../utils/locators";
import envConfig from "../utils/envConfig";

export default class windowsPage {

    private page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    async windowPage() {
       await this.page.waitForLoadState();
       await this.page.click(locators.locator_windowTab);
       await expect(this.page.locator(locators.locator_windowsPageTitle))
       .toHaveText("Window Operations");
       console.log(await this.page.url());
    }

    async replacePageUrl() {
       await this.page.waitForLoadState();
       await this.page.click(locators.locator_windowTab);
       await expect(this.page.locator(locators.locator_windowsPageTitle))
       .toHaveText("Window Operations");
       console.log(await this.page.url());
       await this.page.click(locators.locator_replaceWindowBtn)
       await this.page.waitForLoadState();
       const newUrl = console.log(await this.page.url());
       await expect(newUrl).toEqual(envConfig.google_url);

        
    }
}