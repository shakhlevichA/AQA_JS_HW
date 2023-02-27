Cypress.Commands.add('querySearch', (query) => {
    cy.get('.x-search__input').type(`${query}{enter}`)
    
    
});

