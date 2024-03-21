/// <reference types="cypress" />

describe('Create Book', () => {
  it('should create a new book', () => {
    // Visit the page where you can create a new book (assuming it's accessible via a URL)
    cy.visit('/books');

    // Generate a random ISBN between 10 and 13 digits long
    const randomISBN = Math.floor(1000000000 + Math.random() * 9000000000);

    // Fill in the form fields to create a new book
    cy.get('input[name="isbn"]').type(randomISBN.toString());
    cy.get('input[name="author"]').type('Test Author');
    cy.get('input[name="title"]').type('Test Title');

    // Submit the form to create the book
    cy.get('button[type="submit"]').click();

    // Wait for the book creation to complete (assuming there's a success message or confirmation)
    cy.contains('Book created!').should('be.visible');
  });
});
