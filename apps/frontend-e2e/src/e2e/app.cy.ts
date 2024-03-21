/// <reference types="cypress" />

describe('Pagination', () => {
  beforeEach(() => {
    // Visit the page where the books list with pagination is rendered
    cy.visit('/books');
  });

  it('should navigate to the next page when clicking on the "Next" button', () => {
    // Click on the "Next" button
    cy.contains('Next').click();

    // Verify that the URL has changed to reflect the next page
    cy.url().should('include', '/books?page=2');

    cy.get('.grid').children().should('have.length.greaterThan', 0);
  });

  it('should navigate to the previous page when clicking on the "Previous" button', () => {
    // Click on the "Previous" button
    cy.contains('Previous').click();

    // Verify that the URL has changed to reflect the previous page
    cy.url().should('include', '/books?page=1');

    cy.get('.grid').children().should('have.length.greaterThan', 0);
  });
});
