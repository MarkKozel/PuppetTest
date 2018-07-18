/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
const faker = require('faker');
const puppeteer = require('puppeteer');

const lead = {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    message: faker.random.words()
};

const APP = "file:///C:/Users/Mark/Development/Projects/web/PuppetTest/contact-form.html";
// const APP = "https://google.com";
const width = 600;
const height = 800;

(async() => {
    // const browser = await puppeteer.launch();

    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        args: [`--window-size=${width},${height}`]
    });

    const page = await browser.newPage();
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

    await page.screenshot({ path: 'example.png' });
    // await page.pdf({ path: 'report.pdf' });

    await browser.close();
})();