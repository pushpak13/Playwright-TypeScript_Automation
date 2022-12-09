import test, {chromium, expect, TestInfo } from "@playwright/test";
let testInfo: TestInfo;
const screenshot = './screenshots/';
const baseDir = "videos/"

test("CheckBox",async () => {
  const browser = await chromium.launch();
  const context  = await browser.newContext({
    recordVideo: {
      dir: baseDir,
    },
  });
    const videoFileName = test.info().title;
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Register.html");
    const checkBox =  page.locator("id=checkbox1");
    expect(await checkBox.isChecked()).toBeFalsy();
    await checkBox.check();
    expect(await checkBox.isChecked()).toBeTruthy();
    await context.close();
    await page.video()?.saveAs(`${baseDir}/${videoFileName}_${new Date().toDateString()}.webm`);
    await page.video()?.delete();
  
})
   
test.only("InputText",async (testInfo) => {
    const browser = await chromium.launch();
    const context  = await browser.newContext({
    recordVideo: {
      dir: baseDir,
    }
  })
    const TestFileName = test.info().title;
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.screenshot({path: `${screenshot}/${TestFileName}/registerpage_${new Date().toDateString()}.png`});
    const firstName = page.locator('[placeholder="First Name"]');
    console.log(await firstName.getAttribute("placeholder"));
    expect(firstName).toHaveAttribute("placeholder", "First Name");
    console.log('Before entering data: ' + await firstName.inputValue());
    await firstName.type("Jacob");
    await page.screenshot({path: `${screenshot}/${TestFileName}/firstname_${new Date().toDateString()}.png`});
    console.log('After entering data: ' + await firstName.inputValue());
    const lastName = page.locator('[placeholder="Last Name"]');
    console.log(await lastName.getAttribute("placeholder"));
    expect(lastName).toHaveAttribute("placeholder", "Last Name");
    console.log("Before entering data:" + await lastName.inputValue());
    await lastName.type("Andrews");
    await page.screenshot({path: `${screenshot}/${TestFileName}/lastname_${new Date().toDateString()}.png`});
    console.log('After entering data: ' + await lastName.inputValue());
    await context.close();
    await page.video()?.saveAs(`${baseDir}/${TestFileName}_${new Date().toDateString()}.webm`);
    await page.video()?.delete();
})

  test("RadioButtons",async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext({
        recordVideo: {
            dir: baseDir,
          }
    });
    const TestFileName = test.info().title;
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.screenshot({
      path: `${screenshot}/${TestFileName}/registerpage_${new Date().toDateString()}.png`, fullPage: true});
    const radio = page.locator("input[value='Male']");
    expect(await radio.isChecked()).toBeTruthy();
    await page.screenshot({path: `${screenshot}/${TestFileName}/uncheckedradio_${new Date().toDateString()}.png`});
    await radio.check();
    expect(await radio.isChecked()).toBeTruthy();
    await page.screenshot({path: `${screenshot}/${TestFileName}/checkedradio_${new Date().toDateString()}.png`});
    await context.close();
    await page.video()?.saveAs(`${baseDir}/${TestFileName}_${new Date().toDateString()}.webm`);
    await page.video()?.delete();
       
 })

    /*test("Singleselect Dropdown",async ({page}) => {
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

test("Download", async({page}) => {
    await page.goto("https://demo.automationtesting.in/FileDownload.html");
    await page.type("#textbox", "Hello World!");
    await page.click("#createTxt");
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.click("id=link-to-download"),
    ]);
    //console.log(await download.path());
    const fileName = download.suggestedFilename();
    await download.saveAs(fileName);
})

test("Upload", async({page}) =>{
  await page.goto("https://demo.automationtesting.in/FileUpload.html");
  await page.setInputFiles("//input[@type='file']", ["uploadItems/apple.png", "uploadItems/mango.jpg"])

  /*const [uploadFiles] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.click("//input[@type='file']")
  ])
  const isMultiple = uploadFiles.isMultiple();
  console.log(isMultiple);
  uploadFiles.setFiles(["uploadItems/apple.png", "uploadItems/mango.png"]);*/



