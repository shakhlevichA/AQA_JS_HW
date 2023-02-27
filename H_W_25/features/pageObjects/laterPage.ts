import {Element, ElementsManager} from '../../framework/utils/elemetsManager'

export class WatchLaterPage {
    public readonly filmTitle = ElementsManager.getElement('a.name', Element.Label)

    public getTitleText() {
        return this.filmTitle.text
    } 
}