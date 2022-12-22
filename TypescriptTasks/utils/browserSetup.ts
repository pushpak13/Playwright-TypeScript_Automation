import{Page, Browser, BrowserContext, FullConfig} from "@playwright/test";
let page: Page;
let browser: Browser;
let context: BrowserContext;


    async function browserSetup() {
        context = await browser.newContext({
            recordVideo: {
                dir: './test-results',
            },

        });
        page = await context.newPage();
    }
    

export default  browserSetup; 

       
    
       



