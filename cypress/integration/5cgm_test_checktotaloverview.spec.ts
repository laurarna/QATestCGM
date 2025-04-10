// cypress/integration/5cgm_test_checktotaloverview.spec.ts

describe('CGM Test for SauceDemo - Check totals in checkout Overview', () => {
  beforeEach(() => {
      // Go to Sauce Demo website
	  cy.visit('https://www.saucedemo.com/');
  });

  it('should verify item total and total with tax in Checkout Overview', () => {
      // Login
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();

      // Add first product to cart
      cy.get('.inventory_item').first().find('button').click();

      // Go to cart
      cy.get('.shopping_cart_link').click();

      // Checkout
      cy.get('[data-test="checkout"]').click();

      // Fill in checkout information
      cy.get('[data-test="firstName"]').type('Laura');
      cy.get('[data-test="lastName"]').type('Rana');
      cy.get('[data-test="postalCode"]').type('76125');
      cy.get('[data-test="continue"]').click();

      // Takes Item total 
      cy.get('.summary_subtotal_label').then(($subtotal) => {
		  // Reads text in Item total row
          const itemTotalText = $subtotal.text();
          // Removes "Item total" and converts remainder to float
		  const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));
		// Takes Tax 
          cy.get('.summary_tax_label').then(($tax) => {
			  // Reads text in Tax row
              const taxText = $tax.text();
              // Removes "Tax" and converts remainder to float
			  const tax = parseFloat(taxText.replace('Tax: $', ''));

              const expectedTotal = itemTotal + tax;
			  // Takes Total
              cy.get('.summary_total_label').then(($total) => {
				  // Reads text in Total row
                  const totalText = $total.text();
				  // Removes "Total" and converts remainder to float
                  const total = parseFloat(totalText.replace('Total: $', ''));

                  // Verify that the total of the products is not zero
                  expect(itemTotal).to.be.greaterThan(0);

                  // Verify that the total with taxes is mathematically correct
                  expect(total).to.equal(expectedTotal);
              });
          });
      });
  });
});

