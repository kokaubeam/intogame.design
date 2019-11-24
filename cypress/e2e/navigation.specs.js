describe('Navigation', () => {
  it('should default to the home page', () => {
    cy.visit('/')
      .findAllByText(/into game design/i, { timeout: 500 })
      .should('have.length', 2)
  })

  it('should handle routes that do not exist', () => {
    cy.visit('/404').findByText(/page not found/i, { timeout: 500 })
  })
})
