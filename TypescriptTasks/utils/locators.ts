export default class locators {
    //iframes
    public static locator_iframeTab: string = "text=IFrames";
    public static locator_iframe1: string = "#frame1";
    public static locator_iframe2: string = "#frame2";
    public static locator_pageTitle: string = "//*[@id='selenium_logo']/title";
    public static locator_search: string = "#docsearch";
    public static locator_searchBar: string = "input[id='docsearch-input']";
    public static locator_searchDoc: string = "#docsearch-item-0";
    public static locator_hitAction: string = "//div[@class='DocSearch-Hit-action']";
    public static locator_seleniumDocHeader: string = "//div[@class='td-content']/h1"
    public static locator_aboutDropdown: string = "//a[@id='navbarDropdown'][text()='About']";
    public static locator_aboutSeleniumItem: string = "//a[@class='dropdown-item'][text()='About Selenium']";
    public static locator_aboutSeleniumHeader: string = "//div[@class='text-center']/h1"
    public static locator_natGeoLink: string = "(//a[@class='AnchorLink'])[1]";
    public static locator_loginIframe: string = "#oneid-iframe";
    public static locator_login: string = "text=Login";
    public static locator_email: string = "//input[@id='InputIdentityFlowValue']";
    public static locator_continueBtn = "//button[text()='Continue']";
    public static locator_password = "input[id='InputPassword']";
    public static locator_signInBtn = "//button[text()='Sign In']";
    public static locator_tryLaterBtn = "//button[id='BtnCancel']";
    public static locator_menuBtn: string = "//button[@aria-label='Menu']";
    public static locator_topic: string = "//a[@class='AnchorLink MenuModal__Content__List__Item--primarylink'][text()='Animals']";
    public static locator_sites: string = "text=Read The Magazine";
    public static locator_topicPageTitle: string = "//div[@class='BannerHeading__Title']";
    public static locator_newsLetterTab: string = "//a[text()='Newsletters']";
    public static locator_newsLetterPageTitle: string = "//h1[@class='NewsletterSignup__Title']";
    public static locator_searchIcon: string = "//a[@aria-label='Search']";
    public static locator_searchField: string = "//*[@id='natgeo-search-input']/div/form/input";
    public static locator_searchBtn: string = "//button[@class='Button--unstyled SearchBar__SearchButton']";
    public static locator_searchItemLink: string = "//a[@class='AnchorLink ResultCard__Link']/*[text()='Science']";

    //Carousels
    public static locator_carouselTab: string = "text=Carousels";
    public static locator_nextBtn: string = '[aria-label="Next"]'
    public static locator_prevBtn: string = '[aria-label="Previous"]'
    public static locator_sliderTitle: string = "#post-1241 > div > div.wp-block-coblocks-gallery-carousel > div > div.has-carousel.has-carousel-lrg.swiper-container.has-nav-75ec7255 > div > div:nth-child() > div > figure > picture";

    //Window Operations
    public static locator_windowTab = "text=Window Operations";
    public static locator_windowsPageTitle = "//h1";
    public static locator_newTabBtn = "text=New Tab";
    public static locator_replaceWindowBtn = "text=Replace Window";
    public static locator_newWindowBtn = "text=New Window";

    //Broken Links
    public static locator_brokenLinksTab = "text=Broken Links";
    public static locator_clickMe = "text=Click me";
    public static locator_brokenLinkMsg = "//span[@jsselect='heading']";

}