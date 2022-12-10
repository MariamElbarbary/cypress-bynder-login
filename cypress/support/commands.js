// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Check is element exists in the DOM
Cypress.Commands.add('checkIfElementExists', selector => {
    let ifExists = false;
    cy.get('body').then(body => {
        if (body.find(selector).length > 0) {
            return true;
        } else {
            return false
        }
    })
});

// Login from UI test
Cypress.Commands.add('loginFromUI', (email, password, loginSel) => {
    cy.visit('/login')
    cy.get(loginSel.email).type(email)
    cy.get(loginSel.password).type(password) // correct password
    cy.get(loginSel.loginBtn).click()
});