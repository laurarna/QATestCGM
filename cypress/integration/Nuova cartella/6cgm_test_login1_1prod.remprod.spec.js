
// cypress/integration/multi_product_purchase.spec.ts

describe('E2E Test for Sauce Demo - Multiple Products', () => {
  it('should add multiple products to the cart and finalize the purchase', () => {
      // Visit the Sauce Demo website
      cy.visit('https://saucedemo.com/');

      // Login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');

      // Add multiple products to the cart
      cy.get('.inventory_item').eq(0).find('button').click();
      cy.get('.inventory_item').eq(1).find('button').click();
      cy.get('.inventory_item').eq(2).find('button').click();

      // Go to the cart
      cy.get('.shopping_cart_link').click();

      // Verify the products are in the cart
      cy.get('.cart_item').should('have.length', 3);

      // Proceed to checkout
      cy.get('[data-test=checkout]').click();

      // Fill in checkout information
      cy.get('[data-test=firstName]').type('Laura');
      cy.get('[data-test=lastName]').type('Rana');
      cy.get('[data-test=postalCode]').type('00100');
      cy.get('[data-test=continue]').click();

      // Verify the checkout overview page
      cy.url().should('include', '/checkout-step-two.html');

      // Finalize the purchase
      cy.get('[data-test=finish]').click();

      // Verify the purchase confirmation
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
	  
      // Back to products
      cy.get('[data-test=back-to-products]').click();
	  
	  // Verify successful back to products by checking the URL
      cy.url().should('include', '/inventory.html');
  });
});
