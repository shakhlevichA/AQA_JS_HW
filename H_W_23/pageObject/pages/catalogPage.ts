import { DefaultPage } from './defaultPage';
import { ElemManager } from '../../framework/helpers/elemManager';
import { Elements } from '../../framework/helpers/elements';

export class CatalogPage extends DefaultPage {
    public readonly logoOnPage = ElemManager.getElement('div.b-top-logo [alt]', Elements.Label);
    public readonly ElemOnCatalog = ElemManager.getElement('.catalog-navigation-classifier__item:not([class*=brand])', Elements.Label);
    public readonly socialButtonVK = ElemManager.getElement('[class="footer-style__social"] [href="https://vk.com/onliner"]', Elements.Link);
    public readonly socialButtonFacebook = ElemManager.getElement('[class="footer-style__social"] [href="https://facebook.com/onlinerby"]', Elements.Link);
    public readonly socialButtonTwitter = ElemManager.getElement('[class="footer-style__social"] [href="https://twitter.com/OnlinerBY"]', Elements.Link);
    public readonly socialButtonYoutube = ElemManager.getElement('[class="footer-style__social"] [href="https://youtube.com/onlinerby"]', Elements.Link);

    constructor() {
        super('div.layout-container');
    }

}