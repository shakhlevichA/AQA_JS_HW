import { BaseElement } from './baseElement';

export class TextField extends BaseElement {
    async type(text: string) {
        const el = await this.waitForVisible();
        
        await el.addValue(text);
    }

    async clearAndType(text: string) {
        const el = await this.waitForVisible();

        await el.setValue(text)
    }

    async getInpitValue() {
        const el = await this.waitForVisible()
        await el.getValue()
    }
}