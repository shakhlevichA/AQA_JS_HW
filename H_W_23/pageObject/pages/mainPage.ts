import { DefaultPage } from './defaultPage';
import { ElemManager } from '../../framework/helpers/elemManager';
import { Elements } from '../../framework/helpers/elements';

export class MainPage extends DefaultPage {
    public readonly catalogBlock = ElemManager.getElement('[id="onliner-catalog-purchases"] ', Elements.Label);
    public readonly buttonCatalog = ElemManager.getElement('[href="https://catalog.onliner.by"][class*="navigation__link"]', Elements.Link);
   
    constructor() {
        super('[class="no-touch"]');
    }

}