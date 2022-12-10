import {login} from "./login.selector";

export const ifCapchaExists = () => {
    cy.checkIfElementExists(login.securityCheck)
        .then(result => {
            if (result) cy.get(login.loginBtn).click();
        })
}