import {Element, ElementsManager} from '../../framework/utils/elemetsManager'

export class ResultPage {
    public readonly nameResult = ElementsManager.getElement('[class="search_results_topText"] b', Element.TextField)
    public readonly filmsTitle = ElementsManager.getElement('[data-url="/film/505898"]', Element.TextField)
    public readonly mostWanted = ElementsManager.getElement('.most_wanted', Element.Label)
    public readonly alarmText = ElementsManager.getElement('[class="textorangebig"]:nth-of-type(1)', Element.TextField)

    public getResultText() {
      return  this.nameResult.text
    }

    public checkExist() {
      return  this.mostWanted.isDisplayed()
    }

}