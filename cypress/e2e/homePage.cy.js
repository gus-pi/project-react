describe('template spec', () => {
  beforeEach(() => {
    cy.session('user', () => {
      cy.login('demo@cosdensolutions.io', 'cosdensolutions');
    });

    cy.visit('http://localhost:5173/');
  });
  it('renders the home page with expected data', () => {
    cy.get('[data-testid="homepage"]').should('exist');
  });
});
