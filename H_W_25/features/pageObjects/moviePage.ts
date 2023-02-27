import {Element, ElementsManager} from '../../framework/utils/elemetsManager'

export class MoviePage {
    public readonly watchBtn = ElementsManager.getElement('[title="Буду смотреть"]', Element.Button)
}