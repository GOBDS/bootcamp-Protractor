import { element, by } from "Protractor"; 
import { form } from "./../utils/form"

export class homePage extends form {

    bntLeave = element(by.id('buttonLeave'))
}