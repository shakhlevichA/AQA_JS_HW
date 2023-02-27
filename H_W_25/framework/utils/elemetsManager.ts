import { Checkbox } from './../elements/checkbox';
import { BaseElement } from './../elements/baseElement';
import { Label } from './../elements/label';
import { TextField } from './../elements/textfield';
import { Button } from './../elements/button';
export enum Element {
    Button,
    Label,
    TextField,
    Checkbox
}

export class ElementsManager {
    public static getElement(selector: string, element: Element.Button): Button;
    public static getElement(selector: string, element: Element.Label): Label;
    public static getElement(selector: string, element: Element.TextField): TextField;
    public static getElement(selector: string, element: Element.Checkbox): Checkbox;
    public static getElement(selector: string, element: Element) {
        switch(element) {
            case Element.Button:
                return new Button(selector);
            case Element.Label:
                return new Label(selector);
            case Element.TextField:
                return new TextField(selector);
            case Element.Checkbox:
                return new Checkbox(selector);
            default: throw new Error(`Element ${element} is not implemented in ElementsManager`);
        }
    }

    public static getChildElementByCss(parent: BaseElement, child: Element, selector: string) {
        let childType = Label;
        switch(child) {
            case Element.Button:
                childType = Button;
                break;
            case Element.Label:
                break;
            case Element.TextField:
                childType = TextField;
                break;
            case Element.Checkbox:
                childType = Checkbox;
                break;
            default: throw new Error(`Element ${child} is not implemented in getChildElement`);
        }
        return parent.getChild(selector, 'css', childType);
    }

    static getElementsCount(selector: string) {
        return BaseElement.getElementsCount(selector);
    }
}