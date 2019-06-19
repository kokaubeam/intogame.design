describe('Navigation', () => {
  it('should default to the home page', async () => {
    cy.visit('/').getByText(/into game design/i, { timeout: 500 })
  })

  // TODO: Need to fix SPA routing to index.html on direct routes
  it.skip('should handle routes that do not exist', () => {
    cy.visit('/404').getByText(/page not found/i, { timeout: 500 })
  })
})
