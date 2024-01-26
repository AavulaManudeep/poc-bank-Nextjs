describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Apply').click();
    cy.screenshot();
    cy.contains('firstName').parent().find('input[name=firstName]')
      .type("Manudeep", {delay: 100})
      .should('have.value', 'Manudeep')
      .clear()
      .should('not.have.value');

  })
})