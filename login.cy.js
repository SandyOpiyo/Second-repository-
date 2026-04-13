describe('Login Test', () => {
  it('should login successfully', () => {
    cy.visit('https://example.com/login')

    cy.get('#username').type('testuser')
    cy.get('#password').type('password123')
    cy.get('#login').click()

    cy.url().should('include', 'dashboard')
  })
})
