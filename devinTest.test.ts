import {By, until, WebDriver} from 'selenium-webdriver'
import {Devin} from './devinPage'
const devin = new Devin ()

describe("Test to close popup", () => {
    test("Close the popup", async () => {
        await devin.closepopup()
    })
})

describe("Devins Solo Capstone Online Store Project", () => {
    test("Can add clothes to cart, delete, search, and send contact info", async () => {
        await devin.navigate()
        await devin.click(devin.shopBtn)
        await devin.click(devin.shirtItem)
        await devin.click(devin.addToCart)
        await devin.driver.sleep(3000)
        await devin.click(devin.olympiaCollection)
        await devin.click(devin.hoodieItem)
        await devin.click(devin.addToCart)
        await devin.driver.sleep(3000)
        await devin.click(devin.cartBag)
        await devin.click(devin.deleteBtnOne)
        await devin.driver.sleep(3000)
        await devin.click(devin.deleteBtnOne)
        await devin.click(devin.homeBtn)
        await devin.driver.sleep(3000)
        await devin.click(devin.contactBtn)
        await devin.click(devin.nameField)
        await devin.setInput(devin.nameField, "Trey Long")
        await devin.setInput(devin.emailField, "treylong@gmail.com")
        await devin.setInput(devin.phoneField, 4054522231)
        await devin.driver.sleep(2000)
        await devin.click(devin.searchIcon)
        await devin.click(devin.searchBar)
        await devin.doSearch("Shirts")
        await devin.driver.sleep(1000)
        await devin.driver.quit()
    })
})