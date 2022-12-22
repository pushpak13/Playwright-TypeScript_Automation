import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  
  //fullyParallel: true,
    projects:[
      {
        use: {...devices['Desktop Chrome']},
        
      },
     /* {
        use: {...devices['Desktop Firefox']},
        
      },
      {
        use: {...devices['Desktop Safari']},
        
      },*/

    ],
    testDir: './tests/Files/',
    
    use: {
      //baseURL: "https://www.saucedemo.com/",
      headless: false,
      screenshot: "on",
      video: "off",
      ignoreHTTPSErrors: true,
      launchOptions: {
        slowMo: 100
      },
      viewport: {width: 1366, height:768}
    },
    //testMatch: ["test.ts"],
    reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
      open: "always"
    }]],
  /* Maximum time one test can run for. */
   timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  
};

export default config;
