const assert = require('assert')
const username = '#username'
const password = '#password'
const loginBtn = '#loginBtn'
const receipt_number = '#receipt_number'
const lStatus = '//p[@class="search-status-list ul li contant-sec p"]'

describe('webdriver.io page', () => {
    it('uscis', () => {

        browser.url('https://egov.uscis.gov/casestatus/displayLogon.do')
        browser.maximizeWindow()

        $(username).waitForExist(5000)
        $(username).addValue('annamrobins')
        $(password).addValue('Bjthk2f0#')
        $(loginBtn).click()

        $(receipt_number).waitForExist(5000)
        browser.url('https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=WAC1918650252')

        $(lStatus).waitForExist(5000)
        $(lStatus).scrollIntoView()
        const status = $(lStatus).getText()
        console.log(status)

        browser.saveScreenshot('./screenshot.png')
        browser.pause(2000)
    })
})

