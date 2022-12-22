import { expect, Page } from "@playwright/test";
export default class HomePage_SwagLab {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductHomePage() {
        const productHomePage = expect(await this.page.locator("//div[@class='header_secondary_container']"))
        if(productHomePage.toContainText("Products")) {
            console.log("Navigated to Product Home Page")
        } else {
            console.log("Not in Product Home Page")
        }

     }
        
}



