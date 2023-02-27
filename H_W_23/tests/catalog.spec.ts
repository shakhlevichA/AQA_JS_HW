import { expect } from '@playwright/test';
import { PageFactory } from '../pageObject/pageFactory/pageFactory';
import { test } from '../pageObject/openUrl'
import { Page } from '../pageObject/pageFactory/pages';


test.describe("Test suite", async () => {

    test('catalogue block display on home page ', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await expect(mainPage.catalogBlock.isDisplayed).resolves.toBeTruthy();
    });

      test('catalogue  button  display on home page ', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await expect(mainPage.buttonCatalog.isDisplayed).resolves.toBeTruthy();
    });

    test('The logo on the catalog page ', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.buttonCatalog.click();
        const catalogPage = await PageFactory.getPage(Page.CatalogElement); 
        await expect(catalogPage.logoOnPage.isDisplayed).resolves.toBeTruthy()
    });
    test('Social button', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.buttonCatalog.click();
        const catalogPage = await PageFactory.getPage(Page.CatalogElement); 

        await expect(catalogPage.socialButtonVK.isDisplayed).resolves.toBeTruthy()
        await expect(catalogPage.socialButtonFacebook.isDisplayed).resolves.toBeTruthy()
        await expect(catalogPage.socialButtonTwitter.isDisplayed).resolves.toBeTruthy()
        await expect(catalogPage.socialButtonYoutube.isDisplayed).resolves.toBeTruthy()
    });

    test('Check catalog tabs', async ({ page }) => {
        const mainPage = await PageFactory.getPage(Page.Main);
        await mainPage.buttonCatalog.click();
        const TabsOnCatalog = await PageFactory.getPage(Page.CatalogElement); 
        await expect(TabsOnCatalog.ElemOnCatalog.isDisplayed).resolves.toBeTruthy()
       
    });
})
