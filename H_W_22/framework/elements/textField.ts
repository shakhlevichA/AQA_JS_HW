import { BaseElement } from "./baseElement";


export class TextField extends BaseElement {
    public typeText(text: string) {
        return this.element.sendKeys(text);
    }

    public async clearAndType(text: string) {
        await this.element.clear();
        await this.typeText(text);
    }
}
