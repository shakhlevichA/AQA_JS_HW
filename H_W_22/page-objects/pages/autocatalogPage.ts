import { By } from 'selenium-webdriver';
import { TextLabel } from '../../framework/elements/textLabel';
import { DefaultPage } from './defaultPage';

export class AutocatalogPage extends DefaultPage {
    public readonly autoCatPageTitle = new TextLabel(By.xpath('//h1[contains(@class,"title_big-alter")]'));
}