/// - Написать минимум 5 UI тестов для сайта: https://catalog.onliner.by/
// - При написании использовать различные типы селекторов и локаторов
// - Добавить методы ожидания элементов
// - Добавить проверки элементов/текстовых значений


import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';



describe('Catalog', () => {
    let driver: WebDriver;
    beforeEach(async () => {
        const service = new chrome.ServiceBuilder(path);
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
        await driver.manage().window().maximize()
    });

    afterEach(() => {
       driver.close()
       driver.quit();
    });




    it('Navigation classifier > tem title wrapper', async () => {
        const arrCatalog = [
        "Onlíner Prime", 
        "Электроника",
        "Компьютеры и сети",
        "Бытовая техника",
        "Стройка и ремонт",
        "Дом и сад",
        "Авто и мото",
        "Красота и спорт",
        "Детям и мамам",
        "Работа и офис"]
        driver.get('https://catalog.onliner.by/');
        const elements = await driver.findElements(By.css("span.catalog-navigation-classifier__item-title-wrapper"));
        let i = 0;
        let e = 0;
        for(let el of elements){
            const element = await el.getText();
          if(element === arrCatalog[i]) e++; i++            
       }
       expect(e).toEqual(arrCatalog.length);  

})


    it('Navigation classifier > item brand', async () => {
        const arrCatalog = [
        "Товары на каждый день", 
        "Зроблена ў Беларусі",
        "Суперцены",
        "Игровая зона",
        "Xiomi",
        "Samsung",
        "Apple",
        "Зоотовары"
        ]
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elements = await driver.findElements(By.css("li.catalog-navigation-classifier__item.catalog-navigation-classifier__item_brand"));
        let i = 0;
        let e = 0;
        for(let el of elements){
            const element = await el.getAttribute('data-item-id');
          if(element === arrCatalog[i]) e++; i++            
       }
       expect(e).toEqual(arrCatalog.length);  
})

    it('footer style > social button', async () => {
        const arrCatalog = [
        "https://vk.com/onliner", 
        "https://facebook.com/onlinerby",
        "https://twitter.com/OnlinerBY",
        "https://youtube.com/onlinerby",
        ]
        driver.get('https://catalog.onliner.by/');
        const elements = await driver.findElements(By.css("a[rel^='noopener'"));
        let i = 0;
        let e = 0;
        for(let el of elements){
            const element = await el.getAttribute('href');
          if(element === arrCatalog[i]) e++; i++            
       }
       expect(e).toEqual(arrCatalog.length);  

})


it('Find elment "Все суперцены" ', async () => {
    const  actualResult = 'Все суперцены'
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elem = await driver.findElement(By.css('div.b-main-navigation__bubble.b-main-navigation__bubble_primary')); 
        console.log(await elem.getText())

      expect(await elem.getText()).toBe(actualResult); 
    })


it('Online logo', async () => {
    const  actualResult = 'https://gc.onliner.by/images/logo/onliner_logo.v3@2x.png?1672819354'
        driver.get('https://catalog.onliner.by/');
        while(!driver.executeScript('document.readyState === "complete"'));
        const elem = await driver.findElement(By.css('img.onliner_logo')); 
        console.log(await elem.getText())

      expect(await elem.getText()).toBe(actualResult); 
})

    
it('footer-style elements', async () => {
    const arrCatalog = [
     "О компании", 
     "Контакты редакции",
     "Реклама",
     "Тарифы",
     "Вакансии",
     "Манифест",
     "Пользовательское соглашение",
     "Публичные договоры",
     "Политика конфиденциальности",
     "Поддержка пользователей",
     "Правила возврата"]
    driver.get('https://catalog.onliner.by/');
    const elements = await driver.findElements(By.css("li.footer-style__item"));
    let i = 0;
    let e = 0;
    for(let el of elements){
        const element = await el.getText();
      if(element === arrCatalog[i]) e++; i++            
   }
   expect(e).toEqual(arrCatalog.length);  

})

})