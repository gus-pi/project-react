describe('template spec', () => {
  beforeEach(() => {
    cy.session('user', () => {
      cy.login('demo@cosdensolutions.io', 'cosdensolutions');
    });

    cy.visit('http://localhost:5173/');
  });
  it('renders the home page with expected elements', () => {
    cy.get('[data-testid="homepage"]').should('exist');
    cy.get('[data-testid="listing-filters"]').should('exist');
    cy.get('[data-testid="listing-list"]').should('exist');
  });

  it('displays the correct number of initial listings', () => {
    const expectedListingCount = 12;
    cy.get('[data-testid="listing-list"] > *').should(
      'have.length',
      expectedListingCount,
    );
  });

  it('filters listings correctly', () => {
    cy.get('[data-testid="listing-filters"] input[name="search"]').type(
      'Paris',
    );

    cy.get('[data-testid="listing-filters-submit"]').click();

    cy.get('[data-testid="listing-list"] > *').should('have.length', 6);

    //increment the guest filter to 16
    for (let i = 0; i < 16; i++) {
      cy.get('[data-testid="stepper-increment"]').click();
    }

    cy.get('[data-testid="listing-filters-submit"]').click();

    cy.get('[data-testid="listing-list"] > *').should('have.length', 1);
  });

  it('handles no results scenarios', () => {
    cy.get('[data-testid="listing-filters"] input[name="search"]').type(
      'Nonexistinglisting123456',
    );

    cy.get('[data-testid="listing-filters-submit"]').click();
    cy.get('[data-testid="listing-list"] > *').should('have.length', 0);
    cy.contains('No listings found.').should('be.visible');
  });
});
