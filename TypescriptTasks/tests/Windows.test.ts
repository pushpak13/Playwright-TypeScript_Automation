import { expect, Page, test } from "@playwright/test";
let facebookPage: Page;

test("Interaction with Single Window", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());
    const [newWindow] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("'Follow On Twitter'")
    ]);
    console.log(newWindow.url());
})

test("Interaction with Multiple Windows", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    console.log(page.url());
    const [multiWindows] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#followboth")
]);
    await multiWindows.waitForLoadState();
    const windows = multiWindows.context().pages();
    console.log("No of windows: " + windows.length);
        
    windows.forEach(tab => {
    console.log(tab.url());
})
        
    for(let index = 0; index < windows.length; index++) {
    const url = windows[index].url();
    if(url == "https://www.facebook.com/lambdatest/"){
       facebookPage = windows[index];
   }
}
    const text = await facebookPage.textContent("//h1");
    console.log(text);
})

    