import {BasePage} from './basePage'
import {By, until, WebDriver} from 'selenium-webdriver'

export class Devin extends BasePage {
    popUpBtn: By = By.xpath('//button[@class="recommendation-modal__button"]')
    shopBtn: By = By.xpath('(//a[@class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"])[2]')
    olympiaCollection: By = By.xpath('(//a[@class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"])[3]')
    contactBtn: By = By.xpath('(//a[@class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"])[4]')
    homeBtn: By= By.xpath('(//a[@class="header__menu-item header__menu-item list-menu__item link link--text focus-inset"])[1]')
    searchIcon: By = By.xpath('//summary[@class="header__icon header__icon--search header__icon--summary link focus-inset modal__toggle"]')
    searchBar: By = By.xpath('//input[@class="search__input field__input"]')
    cartBag: By = By.xpath('//a[@class="header__icon header__icon--cart link focus-inset"]')
    shirtItem: By = By.xpath('//a[@id="CardLink-template--16280857084152__product-grid-7766969254136"]')
    addToCart: By = By.xpath('//button[@class="product-form__submit button button--full-width button--secondary"]')
    hoodieItem: By = By.xpath('//a[@id="CardLink-template--16280857084152__product-grid-7863178985720"]')
    deleteBtnOne: By = By.xpath('(//a[@class="button button--tertiary"])[1]')
    deleteBtnTwo: By = By.xpath('(//a[@class="button button--tertiary"])[2]')
    nameField: By = By.xpath('(//input[@class="field__input"])[1]')
    emailField: By = By.xpath('(//input[@class="field__input"])[2]')
    phoneField: By = By.xpath('(//input[@class="field__input"])[3]')
    sendBtn: By = By.xpath('//button[@class="button"]')
    results: By = By.id('rso')

    constructor() {
        super({url: "https://jameshollingshead.co.uk/"})
    }

    async closepopup () {
        await this.driver.manage().window().maximize()
        await this.navigate()
        await this.click(this.popUpBtn)

    }

    async doSearch(searchTerm: string) {
        return await this.setInput(this.searchBar, `${searchTerm}\n`)
    }

    async sendKeys(elementBy: By, keys: string | number | Promise<string | number>,) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getResults() {
        return this.getText(this.results)
    }
    }