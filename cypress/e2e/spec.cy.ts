describe('Pages Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Fancy Marketplace')
  })
  it('Visits basket page', () => {
    cy.visit('/basket')
    cy.contains('My basket')
    cy.contains('Go home')
  })
})
