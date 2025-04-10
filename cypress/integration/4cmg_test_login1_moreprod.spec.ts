// cypress/integration/e2e_test.spec.ts

describe('E2E Test for Sauce Demo - Create a complete order with all products', () => {
  it('should add products to the cart and finalize the purchase', () => {
      // Visit the Sauce Demo website
      cy.visit('https://saucedemo.com/');

      // Login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');

      // Add all products to the cart
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).find('button').click();
      });

      // Go to cart
      cy.get('.shopping_cart_link').click();

      // Verify all products are in the cart (there are 6 total)
      cy.get('.cart_item').should('have.length', 6);

      // Proceed to checkout
      cy.get('[data-test=checkout]').click();

      // Fill in checkout info
      cy.get('[data-test=firstName]').type('Laura');
      cy.get('[data-test=lastName]').type('Rana');
      cy.get('[data-test=postalCode]').type('76125');
      cy.get('[data-test=continue]').click();
  
      // Verify the checkout overview page
      cy.url().should('include', '/checkout-step-two.html');
	  
	  // verify there are exactly 6 products in your cart
      cy.get('.cart_item').should('have.length', 6);
	  
	  // Verify that the total order summary is present on the page.
      cy.get('.summary_info').should('exist');
      cy.get('.summary_total_label').should('contain', 'Total:'); 

      // Finalize purchase
      cy.get('[data-test=finish]').click();

      // Confirm order success
      cy.get('.complete-header').should('contain', 'Thank you for your order!');

      // Back to products
      cy.get('[data-test=back-to-products]').click();
		  
	  // Verify successful back to products by checking the URL
      cy.url().should('include', '/inventory.html');
  });
});