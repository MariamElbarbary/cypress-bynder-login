export const capchaApi = () => {
    return cy.intercept('POST', 'https://wave-trial.getbynder.com/user/doVerify/', {
        statusCode: 302
    }).as("postCapcha")
}

// IN the test
// cy.wait('@postCapcha').its('response.statusCode')
//               .should((status) => expect(status).to.eq(302));