import { browser } from "Protractor";
import { loginPage } from "./login-page"
import { homePage } from  "./../home/home-page"

describe(`validate login`, function(){

    const page = new loginPage()
    const home = new homePage()
    const invalidUser = 'gobs'
    const invalidPassword = 'gobs123'
    const validUser = 'admin@venturus.org.br'
    const validPassword = 'admin'

    var data = require("./../data/login-data.module")
    var using = require(`jasmine-data-provider`)

    beforeAll(function (){
        browser.get(page.loginURL)
    })

    it(`Should check if page is valid`, function (){
        browser.getCurrentUrl().then(value => {
            expect(value).toBe(page.loginURL)
        })
    })

    it(`Should fail with an empty user/password`, function(){
        expect(page.bntLogging.isEnabled()).toBe(false)
    })

    using(data.logging, function(value, description) {
        it(`Should fail with an invalid user/password with: ` + description, function(){
            page.fillInput(page.user, value.user)
            page.fillInput(page.password,value.password)
            expect(page.bntLogging.isEnabled()).toBe(true)
            page.bntClick(page.bntLogging)
            expect(page.error.isDisplayed()).toBe(true)
        })
    })

    it(`Should fail with an empty user`, function(){
        page.fillInput(page.user,invalidUser)
        expect(page.bntLogging.isEnabled()).toBe(false)
    })

    it(`Should fail with an invalid password`, function(){
        page.fillInput(page.user,validUser)
        page.fillInput(page.password,invalidPassword)
        expect(page.bntLogging.isEnabled()).toBe(true)
        page.bntClick(page.bntLogging)
        expect(page.bntLogging.isDisplayed()).toBe(true)
    })

    it(`Should fail with an empty password`, function(){
        page.fillInput(page.password,invalidPassword)
        expect(page.bntLogging.isEnabled()).toBe(false)
    })

    it(`Should login with a valid user/password`, function(){
        page.fillInput(page.user,validUser)
        page.fillInput(page.password,validPassword)
        expect(page.bntLogging.isEnabled()).toBe(true)
        page.bntClick(page.bntLogging)
        expect(home.bntLeave.isPresent()).toBe(true)
        home.bntClick(home.bntLeave)
    })

    afterEach(function(){
        page.user.clear()
        page.password.clear()
    })
})
