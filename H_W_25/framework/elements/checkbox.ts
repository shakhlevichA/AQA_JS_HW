import { BaseElement } from './baseElement';
export class Checkbox extends BaseElement {
    get value() {
        return this.waitForVisible().then(el => el.getAttribute('checked').then(val => val !== null));
    }
}