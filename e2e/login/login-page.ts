import { browser, element, by } from "Protractor"; 
import { form } from "./../utils/form"

export class loginPage extends form {
    loginURL = `http://localhost:4200/#/login`

    user = element(by.id('inputUsername'))
    password = element(by.id('inputPassword'))
    bntLogging = element(by.id(`loginBtn`))
    error = element(by.id('invalidCredentialsError'))
}