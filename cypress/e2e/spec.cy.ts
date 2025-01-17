describe('template spec', () => {
  it('loads homepage', () => {
    cy.visit('http://localhost:3000')

    cy.wait(1000)
    cy.title().should('equal', 'Mealdrop - find your next meal')
  })

  it('creates a new order', () => {
    cy.visit('http://localhost:3000/restaurants/2')

    cy.wait(1000)
    // @ts-expect-error as
    cy.takeSnapshot()

    cy.contains('h4', 'Fries').click()

    cy.get('[data-testid="modal"]').should('be.visible')
    // @ts-expect-error
    cy.takeSnapshot()

    cy.contains('button', /add for €2\.50/).click()

    cy.contains('[data-testid="header"] span', '€2.50').should('be.visible')
  })
})
