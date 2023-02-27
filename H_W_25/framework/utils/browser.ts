export class BrowserHelper {

    public static open(path: string) {
      return  browser.url(path)
    }

    public static getTitle() {
      return  browser.getTitle()
    }

    public static getUrl () {
      return  browser.getUrl()
    }

    
}