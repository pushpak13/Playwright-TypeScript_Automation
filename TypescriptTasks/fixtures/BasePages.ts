import {test as baseTest} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import AddToCartPage_SwagLab from "../pages/AddToCartPage_SwagLab";
import AssertionPage from "../utils/AssertionPage";
import HomePage_SwagLab from "../pages/HomePage_SwagLab";
import MenuPage_SwagLab from "../pages/MenuPage_SwagLab";

type pages = {
    loginPage: LoginPage;
    homePage: HomePage_SwagLab;
    addToCartPage: AddToCartPage_SwagLab;
    menuPage: MenuPage_SwagLab;
    assert: AssertionPage;

}

const test = baseTest.extend<pages>({
    loginPage: async({page}, use) => {
        await use(new LoginPage(page))
    },
    homePage: async({page}, use) => {
        await use(new HomePage_SwagLab(page))
    },
    addToCartPage: async({page}, use) => {
        await use(new AddToCartPage_SwagLab(page))
    },
    menuPage: async({page}, use) => {
        await use(new MenuPage_SwagLab(page))
    },
    assert: async({page}, use) => {
        await use(new AssertionPage(page))
    },

})
export default test;
export const expect = test.expect;
export const describe = test.describe;

