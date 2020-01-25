const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://egov.uscis.gov/casestatus/displayLogon.do')
        browser.maximizeWindow()
            
        $('#username').waitForExist(5000)
        $('#username').addValue('annamrobins')
        $('#password').addValue('Bjthk2f0#')
        $('#loginBtn').click()

        $('#receipt_number').waitForExist(5000)
        browser.url('https://egov.uscis.gov/casestatus/mycasestatus.do?appReceiptNum=WAC1918650252')

        $('//p[@class="search-status-list ul li contant-sec p"]').waitForExist(5000)
        $('//p[@class="search-status-list ul li contant-sec p"]').scrollIntoView();
        const status = $('//p[@class="search-status-list ul li contant-sec p"]').getText()
        console.log(status)

        browser.saveScreenshot('./screenshot.png');
        browser.pause(5000)
    })
})

