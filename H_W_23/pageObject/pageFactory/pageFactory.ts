import { Page as PageType } from './pages';
import { MainPage } from '../pages/mainPage';

import { CatalogPage } from '../pages/catalogPage'

export class PageFactory {
    public static getPage(pageType: PageType.Main): Promise<MainPage>;

    public static getPage(pageType: PageType.CatalogElement): Promise<CatalogPage>;
   
    public static getPage(pageType: PageType) {
        switch (pageType) {
            case PageType.Main:
                return new MainPage().waitForLoad();
           
            case PageType.CatalogElement:
                return new CatalogPage().waitForLoad();    
              
            default:
                throw new Error(`Page factory is not implemented for ${pageType} `)
        }
    }
}