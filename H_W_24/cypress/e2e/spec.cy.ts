describe('Testing Drive2ru', () => {
  beforeEach(() => {
    cy.visit('https://www.drive2.ru');
  })
  it('Search for "Audi" on the home page', () => {
    cy.get('.x-search__input').type('Audi{enter}')
    cy.get('.c-serp-item__header.u-break-word').first().should('contain', 'Audi')
    cy.screenshot()
    
  })

  it('querySearch "bmw" ', () =>{
    cy.viewport(1280, 720)
    cy.querySearch('bmw')
    cy.get('.c-serp-item__header.u-break-word').first().should('contain', 'BMW').screenshot
  })

it('Logo on the home page', () => {
    cy.get('a.c-logo').should('be.visible')
})

it(' "Все марки" Availability of all elements', () => {
    cy.contains('Все марки').click()
    cy.get('.c-link--text').should('have.length',162)
})
 
it('Registration through third-party resources ',() =>{
    cy.get('a.c-button[data-ym-target^="menu"]').click()
    cy.get('.c-button--l[data-ym-target*="signup_from_signup_by_"]').should('have.length', 4)
} )

})