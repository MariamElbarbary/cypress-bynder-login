import {login} from "./login.selector"
import {ifCapchaExists} from "./login.utils"
import {capchaApi} from "../../mocks/capcha";

describe('Login Page', () => {
    const password = Cypress.env('password')
    const username = Cypress.env('username')
    beforeEach(() => {
        cy.visit('/login')
    })

    //TODO password secrets
    //TODO docker container
    context('successful', async () => {
        it('can successfully log in', async () => {
            cy.loginFromUI(username, password, login)
            await ifCapchaExists()

            cy.location('pathname').should('eq', '/account/dashboard/')
        })

        it('lost password link navigation is correct', async () => {
            cy.get(login.lostPassword).should('have.attr', 'href')
                .and('contain', '/user/forgotPassword/')
            cy.get(login.lostPassword).click()
            cy.get(login.forgotPasswordForm).should('be.visible')
        })

        it('can successfully logout', async () => {
            cy.loginFromUI(username, password, login)
            await ifCapchaExists()

            cy.location('pathname').should('eq', '/account/dashboard/')
        })

    })

    context('unsuccessful', async () => {
        it('error message is displayed when username incorrect', async () => {
            cy.loginFromUI('test@test.com', password, login)
            await ifCapchaExists();

            cy.get(login.errorMessages)
                .should('be.visible')
                .and('contain', 'You have entered an incorrect username or password.')
        })

        it('error message is displayed when password incorrect', async () => {
            cy.loginFromUI(username, 'test', login)
            await ifCapchaExists();

            cy.get(login.errorMessages)
                .should('be.visible')
                .and('contain', 'You have entered an incorrect username or password.')
        })

        it('error message is displayed when password is empty', async () => {
            cy.loginFromUI(username, '', login)
            await ifCapchaExists();

            cy.get(login.errorMessages)
                .should('be.visible')
                .and('contain', 'Please enter your password')
        })

        it('error message is displayed when username is empty', async () => {
            cy.loginFromUI('', password, login)
            await ifCapchaExists();

            cy.get(login.errorMessages)
                .should('be.visible')
                .and('contain', 'Please enter your username')
        })

        it('error message is displayed when username & password are empty', async () => {
            cy.loginFromUI('', '', login)
            await ifCapchaExists();

            cy.get(login.errorMessages)
                .should('be.visible')
                .and('contain', 'Please enter your username')
        })

    })
})