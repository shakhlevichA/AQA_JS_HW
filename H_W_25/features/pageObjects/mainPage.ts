import {Element, ElementsManager} from '../../framework/utils/elemetsManager'

export class MainPage {
    public readonly searchInput = ElementsManager.getElement('[name="kp_query"]', Element.TextField)
    public readonly searchBtn = ElementsManager.getElement('[aria-label="submit"]', Element.Button)
    public readonly bookmarkBtn = ElementsManager.getElement('.styles_root__JgDCj a[aria-label="presentation"]', Element.Button)
    public readonly EnterBtn = ElementsManager.getElement('.styles_loginButton__LWZQp', Element.Button)
   
    public searchMovie(text: string) {
         return this.searchInput.type(text)      
    }

    public clickSerchBtn() {
        return this.searchBtn.click()
    }



}