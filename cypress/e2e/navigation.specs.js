describe('Navigation', () => {
  it('should default to the home page', async () => {
    cy.visit('/').getByText(/into game design/i, { timeout: 500 })
  })

  it('should handle routes that do not exist', () => {
    cy.visit('/404').getByText(/page not found/i, { timeout: 500 })
  })
})
