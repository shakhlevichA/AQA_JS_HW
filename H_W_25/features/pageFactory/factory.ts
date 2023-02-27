
import { Pages } from "./enumPage";
import { MainPage } from "../pageobjects/mainPage";
import { ResultPage } from "../pageobjects/resultPage";
import { MoviePage } from "../pageobjects/moviePage";
import { WatchLaterPage } from "../pageobjects/laterPage";
import { LoginPage } from "../pageobjects/loginPage";

export class PageFactory {
    public static getPage(pageName: Pages.main): MainPage;
    public static getPage(pageName: Pages.result): ResultPage;
    public static getPage(pageName: Pages.movie): MoviePage;
    public static getPage(pageName: Pages.later): WatchLaterPage;
    public static getPage(pageName: Pages.login): LoginPage;
    public static getPage(pageName: Pages) {
        switch (pageName) {
            case Pages.main:
                return new MainPage();               
            case  Pages.result: 
                return new ResultPage();
            case  Pages.login: 
                return new LoginPage();
            case  Pages.movie: 
                return new MoviePage();
            case  Pages.later: 
                return new WatchLaterPage();
            default:
                throw new Error(`PageFactory is not implemented for ${pageName} `)
                break;
        }
    }
}