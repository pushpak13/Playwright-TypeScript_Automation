import test, { expect } from "@playwright/test";
import { min } from "moment";

test("CheckBox",async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const checkBox =  page.locator("id=checkbox1");
    expect(await checkBox.isChecked()).toBeFalsy();
    await checkBox.check();
    expect(await checkBox.isChecked()).toBeTruthy();
})
   
    test("InputText",async ({page}) => {
        await page.goto("https://demo.automationtesting.in/Register.html");
        const firstName = page.locator('[placeholder="First Name"]');
        console.log(await firstName.getAttribute("placeholder"));
        expect(firstName).toHaveAttribute("placeholder", "First Name");
        console.log('Before entering data: ' + await firstName.inputValue());
        await firstName.type("Jacob");
        console.log('After entering data: ' + await firstName.inputValue());
        const lastName = page.locator('[placeholder="Last Name"]');
        console.log(await lastName.getAttribute("placeholder"));
        expect(lastName).toHaveAttribute("placeholder", "Last Name");
        console.log("Before entering data:" + await lastName.inputValue());
        await lastName.type("Andrews");
        console.log('After entering data: ' + await lastName.inputValue());
    })

    test("RadioButtons",async ({page}) => {
        await page.goto("https://demo.automationtesting.in/Register.html");
        const radio = page.locator("input[value='Male']");
        expect(await radio.isChecked()).toBeFalsy();
        await radio.check();
        expect(await radio.isChecked()).toBeTruthy();
    })

    test("Singleselect Dropdown",async ({page}) => {
        await page.goto("https://demo.automationtesting.in/Register.html");
        await page.selectOption('#Skills', 'Android');
        const selectedValue = await page.$eval<string, HTMLSelectElement>('#Skills', ele => ele.value);
        console.log(selectedValue);
        expect(selectedValue).toBe('Android');
        
 })

 test("Multiselect",async ({page}) => {
    await page.goto("https://demoqa.com/select-menu");
    page.mouse.wheel(0,500);
    await page.selectOption('#cars', ['volvo', 'opel']);
    const selectedValues = await page.$eval<string[], HTMLSelectElement>('#cars', ele => Array.from(ele.selectedOptions).map(option => option.value));
    expect(selectedValues).toEqual(['volvo', 'opel']);
})

test("Alerts",async ({page}) => {
    await page.goto("https://demoqa.com/alerts");
    page.on("dialog",async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept();
     })
    await page.locator("text=Click me").nth(2).click();
    await expect(page.locator("id=confirmResult")).toHaveText("You selected Ok");
})

test("ClickAction",async ({page}) => {
    await page.goto("https://demoqa.com/buttons");
    //Single Click Action
    const clickBtn = await page.locator("text=Click me").nth(2);
    if(await clickBtn.isEnabled()){
        clickBtn.click();
        console.log("Button enabled and Click action performed");
    }else{
        console.log("Button disabled");
    }
})

test("Hover",async ({page}) => {
    await page.goto("http://automationpractice.com/index.php");
    await page.hover("#contact-link");
    await page.waitForTimeout(3000);
    const tooltipText = await page.locator("//a[@title='Contact Us']").getAttribute("title");
    console.log(tooltipText);
    expect(tooltipText).toEqual("Contact Us");
})

test("Frames", async({page}) => {
    await page.goto("https://demoqa.com/frames");
    const frame = page.frames();
    console.log("No of frames: " + frame.length);

    const firstFrame = page.frameLocator("#frame1");
    expect(await firstFrame?.locator("#sampleHeading").innerText()).toBe("This is a sample page");
})

test("Frames-InputData", async({page}) => {
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame = page.frames();
    console.log("No of frames: " + frame.length);
    const myFrame = page.frameLocator("//iframe[@name='globalSqa']");
    await myFrame.locator("input[id='s']").fill("Automation");
    page.waitForSelector("#subheader  div  div  div.header_search  form  button");
    await myFrame.locator("#subheader  div  div  div.header_search  form  button").click();
    await myFrame.locator("#subheader  div  div  div.header_search  form  button").click();
    page.waitForTimeout(2000);
    page.waitForSelector("#wrapper  div.page_heading  h1");
    expect(await myFrame.locator("#wrapper  div.page_heading  h1").textContent()).toContain("Automation");

})

test.only("NestedFrame", async({page}) => {
    /*await page.goto("https://demo.automationtesting.in/Frames.html");
    const frame = page.frames();
    console.log("No of frames: " + frame.length);
    page.waitForSelector("//a[@aria-expanded='false']");
    const mulFrame = await page.locator("//a[@aria-expanded='false']").hover();
    */
   await page.goto("https://www.saucedemo.com/");
   await page.locator("input[name='user-name']").type("standard_user");
   await page.locator("input[name='password']").type("secret_sauce");
   await page.click("input[value='Login']");
   await page.waitForTimeout(2000);
   const priceList = await page.locator("//div[@class='inventory_item_price']").allTextContents();
   var newPriceList = priceList.map(string => string.replace("$",""));
   var int = newPriceList.map(parseFloat);   
   console.log(int);
   let lowestPrice = int[0];
   for(let i = 1; i < int.length; i++) {
    
      if(lowestPrice > int[i]) {
        lowestPrice = int[i]
        const priceBar = expect(await page.locator("//div[@class='pricebar']").textContent()).toContain(lowestPrice)
        await page.click("//button[text()='Add to cart']");

          
      }
    }
    console.log(lowestPrice);  
  
   
   

    
    

    
})
    
    


    

    
