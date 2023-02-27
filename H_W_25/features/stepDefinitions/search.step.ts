import { Given, When, Then } from "@wdio/cucumber-framework";
import { BrowserHelper } from "../../framework/utils/browser";
import { Pages } from "../pagefactory/enumPage";
import { PageFactory } from "../pagefactory/factory";


const main = PageFactory.getPage(Pages.main);
const result = PageFactory.getPage(Pages.result);
const movie = PageFactory.getPage(Pages.movie);
const later = PageFactory.getPage(Pages.later);
const login = PageFactory.getPage(Pages.login);


Given(/^I open (.*)$/, async (url) => {
  await BrowserHelper.open(url);
});

Then(/^I can see a header text message (.*)$/, async (message) => {
  const title = BrowserHelper.getTitle();
  expect(await title).toBe(message);
});

When(/^I type (.+)$/, async (title) => {
  await main.searchMovie(title);
});

When(/^Press search button$/, async () => {
  await main.clickSerchBtn();
});

Then(/^I can see a name result (.+)$/, async (resultText) => {
  const resText = await result.getResultText();
  expect(resText).toBe(resultText);
});

Then(/^I can see relevant link including text (\w+)$/, async (name: string) => {
  await result.checkExist();
  expect(await result.mostWanted.text).toContain(name);
});

Then(/^I can see alarm message (.*)$/, async (text: string) => {
  await result.alarmText.isDisplayed();
  expect(await result.alarmText.text).toContain(text);
});

When(/^I click Войти button$/, async () => {
  await main.EnterBtn.click();
});

When(/^Type login (.*)$/, async (email: string) => {
  await login.typeEmail(email)

});

When(/^Type password (.*)$/, async (password: string) => {
  await login.typePass(password)
 
});

Then(/^I can see my photo and loginName at account$/, async () => {
  const nick = await login.getNickname()
  expect(nick).toBe('shaklevich-and2023')
});


When(/^Click on the first relevant link$/, async () => {
  await result.filmsTitle.click();
});

When(/^Click on the button Буду смотреть$/, async () => {
  await movie.watchBtn.click();
});

When(/^Click on the bookmark label at the header$/, async () => {
  await main.bookmarkBtn.click();
});

Then(
  /^I can find movie (.*) at the Буду смотреть section$/,
  async (film: string) => { 
    const title = await later.getTitleText()
    expect(title).toContain(film)
  }
);