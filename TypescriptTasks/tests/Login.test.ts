import{chromium, test} from "@playwright/test"

test("Login test demo", async () => {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({
        recordVideo: {
            dir:"./videos/"
        }
    });
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']//span[contains(text(),'My account')]");
    await page.click("text=Login");

    await page.fill("input[name='email']", "abc@gmail.com");
    await page.fill("input[name='password']", "abcd");
    await page.click("input[value='Login']");
    await page.waitForTimeout(5000);

    //const page1 = await context.newPage();
    //await page1.goto("https://ecommerce-playground.lambdatest.io/");
    //await page.waitForTimeout(5000);

    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await page.waitForTimeout(5000);


    
})

