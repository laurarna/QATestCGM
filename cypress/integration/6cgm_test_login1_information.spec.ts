// cypress/integration/6cgm_test_login1_information.spec.ts

describe('E2E Test for Sauce Demo - Checkout Validation', () => {
   beforeEach(() => {
      // Go to Sauce Demo website
      cy.visit('https://saucedemo.com/');

      // Login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');

      // Add a product to the cart
      cy.get('.inventory_item').first().find('button').click();

      // Go to the cart
      cy.get('.shopping_cart_link').click();

      // Proceed to checkout
      cy.get('[data-test=checkout]').click();
   });

      it('should display an error message when first name is missing', () => {
      // Fill in last name and postal code only
      cy.get('[data-test=lastName]').type('Rana');
      cy.get('[data-test=postalCode]').type('76125');
      cy.get('[data-test=continue]').click();

      // Verify the error message for missing first name
      cy.get('[data-test=error]').should('contain', 'Error: First Name is required');
   });

   it('should display an error message when last name is missing', () => {
      // Fill in first name and postal code only
      cy.get('[data-test=firstName]').type('Laura');
      cy.get('[data-test=postalCode]').type('76125');
      cy.get('[data-test=continue]').click();

      // Verify the error message for missing last name
      cy.get('[data-test=error]').should('contain', 'Error: Last Name is required');
   });

   it('should display an error message when postal code is missing', () => {
      // Fill in first name and last name only
      cy.get('[data-test=firstName]').type('Laura');
      cy.get('[data-test=lastName]').type('Rana');
      cy.get('[data-test=continue]').click();

      // Verify the error message for missing postal code
      cy.get('[data-test=error]').should('contain', 'Error: Postal Code is required');
   });
});
