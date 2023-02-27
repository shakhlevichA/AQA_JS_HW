import {Element, ElementsManager} from '../../framework/utils/elemetsManager'

export class LoginPage {
    public readonly emailInput = ElementsManager.getElement('[name="login"]', Element.TextField)
    public readonly passInput = ElementsManager.getElement('[name="passwd"]', Element.TextField)
    public readonly enterBtn = ElementsManager.getElement('[id="passp:sign-in"]', Element.Button)
    public readonly nickname = ElementsManager.getElement('[data-tid="ecca3393"]', Element.Button)
    public readonly photo = ElementsManager.getElement('[data-tid="15bd9013"]', Element.Label)
    public readonly textName = ElementsManager.getElement('.nick_name', Element.Label)
    
    
     public typeEmail(text: string) {
       this.emailInput.type(text)
       return this.enterBtn.click()    
   }
     public typePass(pass: string) {
        this.passInput.type(pass)
       return this.enterBtn.click()    
   }

   public getNickname() {    
    this.photo.click()
   this.nickname.click()
   return this.textName.text
   }
    

}