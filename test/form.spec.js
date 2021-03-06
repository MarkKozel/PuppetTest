import faker from "faker";
import puppeteer from "puppeteer";

// const APP = "http://192.168.170.249/contact-form.html";
const APP = "file:///C:/Users/Mark/Development/Projects/web/PuppetTest/contact-form.html";

const lead = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    message: faker.random.words()
};

let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async() => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
});
afterAll(() => {
    browser.close();
});

describe("Contact form", () => {
    test("lead can submit a contact request", async() => {
        await page.goto(APP);
        await page.waitForSelector('form');
        await page.click("input[name=name]");
        await page.type("input[name=name]", lead.name);
        await page.click("input[name=email]");
        await page.type("input[name=email]", lead.email);
        await page.click("input[name=phone]");
        await page.type("input[name=phone]", lead.phone);
        await page.click("textarea[name=message]");
        await page.type("textarea[name=message]", lead.message);
        await page.click("input[type=checkbox]");
        await page.click("button[type=submit]");
        // await page.waitForSelector(".modal");
    }, 16000);
});