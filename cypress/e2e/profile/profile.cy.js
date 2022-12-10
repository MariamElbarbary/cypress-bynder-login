import {login }from "../login/login.selector"
import {profile} from "./profile.selector"

describe('Profile settings', () => {
    const password = Cypress.env('password')
    const username = Cypress.env('username')
    beforeEach(() => {
        cy.loginFromUI(username, password, login) // to be replaced with the other login fucntion
        cy.visit('/account/dashboard')
    })

    it('can successfully logout', async () => {
        cy.get(profile.adminProfile).click()
        cy.get(profile.logoutBtn).click()

        cy.location('pathname').should('contain', '/login')
    })
});