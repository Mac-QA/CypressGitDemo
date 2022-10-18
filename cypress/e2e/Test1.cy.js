describe('My First Cypress Test', function() {
  it('Visits the Platypus site and checks element contains text', function() {
    cy.visit('https://platypus-admin-ui-staging.herokuapp.com/sign-in')
    
    Cypress.Commands.add('typeLogin', (user) => {
      cy.get('[data-testid="email-input"]').type(user.email)
    
      cy.get('[data-testid="password-input"]').type(user.password)
    })

    cy.typeLogin({ email: 'control-admin@staging.com', password: 'ms222EEE3@yopmail.com' })

    cy.get('[data-testid="sign-in-button"]').click()

    cy.get('[data-testid="userApprovalTitle"]').should('have.text', 'All Customers')

    //cy.get('[data-testid="DropdownButton"]').click()

    //cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').should('have.text', 'My Profile')

    //cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"] > .MuiListItemText-root > .MuiTypography-root').click()
  })
})