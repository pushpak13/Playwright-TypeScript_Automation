import { expect, Page } from "@playwright/test";
export default class RegisterPage{

    constructor(public page: Page) {

    }

    async enterFirstName(firstName) {
        await this.page.locator("#input-firstname").type(firstName);
    }

    async enterLastName(lastName) {
        await this.page.locator("#input-lastname").type(lastName);
    }

    async enterEmail(email) {
        await this.page.locator("#input-email").type(email);
    }

    async enterTelephone(phone) {
        await this.page.locator("input[name='telephone']").type(phone);
    }

    async enterPassword(password) {
        await this.page.locator("input[name='password']").type(password);
    }

    async enterConfirmPassword(password) {
        await this.page.locator("input[name='confirm']").type(password);
    }

    async isSubscribedChecked() {
        return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async clickTermsConditionCheckBox() {
        await this.page.click("//label[@for='input-agree']");
    }

    async clickContinueBtn() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click("input[value='Continue']")
        ])
        
        const pageTitle =  await this.page.locator("//h1").textContent()
        if (pageTitle==" Your Account Has Been Created!") {
            console.log("Registration Successful")
        }else{
            console.log("Registration Failed")
        }
    }
    
 }

    
