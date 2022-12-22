import { expect, Page } from "@playwright/test";
import AssertionPage from "../utils/AssertionPage";
import envConfig from "../utils/envConfig";
import * as testData from "../testData/login.cred.json";
let page: Page;


export default class LoginPage{

    private page: Page;
    public constructor(page: Page) {
        this.page = page;

    }

    async enterEmail(email) {
        await this.page.locator("input[name='email']").type(email);
    }

    async enterpassword(password) {
        await this.page.locator("input[name='password']").type(password);
    }

    async clickLoginbtn() {
        await this.page.click("input[value='Login']");
    }

    public get enterUsername() {
        return this.page.locator("input[name='user-name']");
    }

    public get enterPassword() {
        return this.page.locator("input[name='password']");
    }

    public get clickLoginBtn() {
        return this.page.locator("input[value='Login']");
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

    public async loginAction(username: string, password: string) {
        await this.page.waitForLoadState()
            const locator = await this.page.locator("//button[@class='error-button']");
            await this.enterUsername.fill(username);
            await this.enterPassword.fill(password);
            await this.clickLoginBtn.click();
             if(await locator.count() > 0) {
                await this.enterUsername.fill("");
                await this.enterPassword.fill("");
             }else{
            await this.clickOpenMenu.click();
            await this.clickLogoutLink.click();
            //await this.page.waitForSelector('button');
        
            
            
            //if(userNameFied.isVisible()) {
               //console.log("Login failed for Locked Out User");
               //await this.clickErrorBtn.click();
           // }
        //await assert.verifyLoginFailureForLockedOutUser
            //console.log("Login failed for Locked Out User");
            //await this.clickErrorBtn.click();
       /* }else if(await assert.verifyLoginFailureForInvalidCredentials) {
            console.log("Login Failed");
            await this.clickErrorBtn.click();
        }else {
            console.log("Login Successful");
            await assert.verifyProductHomePage;
            await this.clickOpenMenu.click();
            await this.clickLogoutLink.click();

        }*/
        
    } 
        
    }

    public async loginfunc(username: string, password: string) {
        for(const data of testData.Credentials) {
            if(await this.clickErrorBtn) {
                await this.clickErrorBtn.click();
            }else{
                await this.page.locator("input[name='user-name']").fill(data.username);
                await this.page.locator("input[name='password']").fill(data.password);
                await this.page.click("input[value='Login']");
                //await this.page.waitForNavigation({waitUntil: 'load'});
                await this.page.click("#react-burger-menu-btn");
                await this.page.click("#logout_sidebar_link");
                //expect.soft(await this.page.locator("//h3"))
                 //.toHaveText("Epic sadface: Sorry, this user has been locked out.");
                    //console.log("Login failed for Locked Out User");
                    
        
            }
                
                
        
    }
}

    public async login(username, password) {
        await this.page.waitForLoadState();
        await this.page.locator("input[name='user-name']").type(username);
        await this.page.locator("input[name='password']").type(password);
        await this.page.click("input[value='Login']");
       
    }

    public async logout() {
        await this.clickOpenMenu.click();
        await this.clickLogoutLink.click();
        
    }

    


    

    

    

}