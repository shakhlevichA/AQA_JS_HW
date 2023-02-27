export class BaseElement {
    constructor(private readonly selector: string) {
    }

    protected get element() {
        return $(this.selector);
    }

    protected async waitForVisible() {
        const el = await this.waitForExists()

        await el.waitForDisplayed();
        return this.element;
    }

    protected async waitForExists(args?: {reverse: boolean}) {
        await this.element.waitForExist(args);
        return this.element;
    }

    protected async waitForClickable() {
        const el = await this.waitForVisible();
        
        await el.waitForClickable();
        return this.element;
    }

    public async waitForText(expectedText: string) {
        const el = await this.waitForVisible();
        await browser.waitUntil(async () => await this.text === expectedText);
        return el.isDisplayedInViewport();
    }

    get text() {
        return this.waitForExists().then(el => el.getText());
    }

    async click() {
        const el = await this.waitForClickable();
        await el.click();
    }

    async rightClick() {
        const el = await this.waitForClickable();

        await el.click({button: "right"});
    }

    async doubleClick() {
        const el = await this.waitForClickable();

        await el.doubleClick()
    }

    async getChild<T extends BaseElement>(childSelector: string, childSelectorType: 'css' | 'xpath', type: new (selector: string) => T) {
        let selector = '';
        if(childSelectorType === 'css') {
            selector = `${this.selector} ${childSelector}`;
        } else {
            selector = `(${this.selector})//${childSelector}`;
        }
        
        return new type(selector);
    }

    public getElementsCount() {
        return BaseElement.getElementsCount(this.selector);
    }

    public static getElementsCount(selector: string) {
        return $$(selector).length;
    }

    public isDisplayed() {
       return this.element.isDisplayed()
    }

    public async hover() {
        await browser.elementHover(this.selector)
    }
}