// cypress/integration/3cgm_test.spec.ts

describe('CGM Test for Sauce Demo - Create a complete order with one product', () => {
  it('should add a product to the cart and finalize the purchase', () => {
      // Go to Sauce Demo website
      cy.visit('https://saucedemo.com/');
      // Login with standard_user
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');

      // Add the first product to the cart
      cy.get('.inventory_item').first().find('button').click();

      // Go to the cart
      cy.get('.shopping_cart_link').click();

      // Verify the product is in the cart
      cy.get('.cart_item').should('have.length', 1);

      // Proceed to checkout
      cy.get('[data-test=checkout]').click();

      // Fill in checkout information
      cy.get('[data-test=firstName]').type('Laura');
      cy.get('[data-test=lastName]').type('Rana');
      cy.get('[data-test=postalCode]').type('76125');
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
