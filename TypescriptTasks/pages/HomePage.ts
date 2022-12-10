import { expect, Page } from "@playwright/test";
export default class HomePage{

    constructor(public page: Page) {    

    }

    async clickOnSpecialHotMenu() {
        await this.page.click("'Special Hot'");
        const pageHeading = await expect(this.page.locator("//h1").textContent());
        await pageHeading.toBe("Special Offers")
        console.log("Page heading: " + pageHeading)
    
    }
}