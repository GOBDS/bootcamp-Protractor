import { browser } from "Protractor"
import { registerPage } from "./register-page"

describe (`validate register`, function() {

    const page = new registerPage()

    beforeAll(function (){
        browser.get(page.registerURL)
    })

    it(`Should register with no gender`, function() {
        page.fillForm(`gobs`, `da Silva`, `77777777777`, `gobs`, `gobs123`, true)
        page.bntClick(page.bntSubimit)
        page.message.getText().then(value => {
            expect(value).toBe(`Registration complete!`)
        })
    })
})