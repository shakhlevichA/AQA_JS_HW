 import { Locator } from "playwright-core";
import { TestPage } from "../helpers/pageSingleton";

export abstract class DefaultElement {
    protected readonly page = TestPage.getInstance();

    public constructor(private readonly locator: string) {
    }

    protected getElement(): Locator {
        return this.page.locator(this.locator);
    }
     public async click() {
        const element = await this.waitForVisible();
        return element.click();
    }

    public getText() {
        return this.getElement().textContent();
    }

    protected waitForExists() {
        return this.getElement().waitFor();
    }

    public get isDisplayed() {
        return this.getElement().isVisible();
    }

    protected async waitForVisible() {
        await this.waitForExists();
        await this.getElement().waitFor();
        return this.getElement();
    }

   
}
