import { element, by } from "Protractor"; 
import { form } from "./../utils/form"

export class registerPage extends form {

    registerURL = `http://localhost:4200/#/register`

    firstName = element(by.id('firstName'))
    lastName = element(by.id('lastName'))
    cellPhone = element(by.id('cellphone'))
    userName = element(by.id('username'))
    password = element(by.id('password'))
    gender = element(by.id('gender'))
    genderOpt = element(by.id('ckGenderOptOut'))
    bntSubimit = element(by.css('.btn-primary'))
    message = element(by.css(`h3`))

    public fillForm (fname:string, lname:string, phone:string, uname:string, pword:string, opt:boolean, gender?:string ){
        this.fillInput(this.firstName, fname)
        this.fillInput(this.lastName, lname)
        this.fillInput(this.cellPhone, phone)
        this.fillInput(this.userName, uname)
        this.fillInput(this.password, fname)

        if(opt){
            this.genderOpt.click()
        }else {
            element(by.cssContainingText('option', gender)).click()
        }
    }

}