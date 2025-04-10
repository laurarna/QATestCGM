// cypresss/integration/8cgm_test_login1_orderprod.spec.ts

describe('CGM Test for Sauce Demo - Product Sorting Filters', () => {
  beforeEach(() => {
      // Go to Sauce Demo website
      cy.visit('https://saucedemo.com/');

      // Login
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();

      // Verify successful login by checking the URL
      cy.url().should('include', '/inventory.html');
  });

  it('should sort products by Name (A to Z)', () => {
      // Select the filter option to sort products by name (A to Z)
      cy.get('.product_sort_container').select('Name (A to Z)');

      // Verify the products are sorted by name (A to Z)
	  // Select all items containing product names with class .inventory_item_name and take it to to a callback function 
      cy.get('.inventory_item_name').then(($names) => {
		  
		  // Create an array with the name
          const names = $names.map((index, el) => Cypress.$(el).text()).get();
		  
          // Creates a copy of the array and sorts it
		  const sortedNames = [...names].sort();
		  
		  //Compare the original array with the sorted one
          expect(names).to.deep.equal(sortedNames);
      });
  });

  it('should sort products by Name (Z to A)', () => {
      // Select the filter option to sort products by name (Z to A)
      cy.get('.product_sort_container').select('Name (Z to A)');

      // Verify the products are sorted by name (Z to A)
	  // Select all items containing product names with class .inventory_item_name and take it to to a callback function 
      cy.get('.inventory_item_name').then(($names) => {
		  
		  // Create an array with the names
          const names = $names.map((index, el) => Cypress.$(el).text()).get();
		  
		  // Creates a copy of the array and sorts it
          const sortedNames = [...names].sort().reverse();
		  
		  //Compare the original array with the sorted one
          expect(names).to.deep.equal(sortedNames);
      });
  });

  it('should sort products by Price (low to high)', () => {
      // Select the filter option to sort products by price (low to high)
      cy.get('.product_sort_container').select('Price (low to high)');

      // Verify the products are sorted by price (low to high)
	  // Select all items containing product price  with class .inventory_item_name and take it to to a callback function 
      cy.get('.inventory_item_price').then(($prices) => {
		  
		  // Create an array with the prices
          const prices = $prices.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
		  
		  // Creates a copy of the array and sorts it (low to high)
          const sortedPrices = [...prices].sort((a, b) => a - b);
		  
		  //Compare the original array with the sorted one
          expect(prices).to.deep.equal(sortedPrices);
      });
  });

  it('should sort products by Price (high to low)', () => {
      // Select the filter option to sort products by price (high to low)
      cy.get('.product_sort_container').select('Price (high to low)');

      // Verify the products are sorted by price (high to low)
	  // Select all items containing product price  with class .inventory_item_name and take it to to a callback function 
      cy.get('.inventory_item_price').then(($prices) => {
          
		  // Create an array with the prices
		  const prices = $prices.map((index, el) => parseFloat(Cypress.$(el).text().replace('$', ''))).get();
          
		  // Creates a copy of the array and sorts it (high to low)
		  const sortedPrices = [...prices].sort((a, b) => b - a);
          
		  //Compare the original array with the sorted one
		  expect(prices).to.deep.equal(sortedPrices);
      });
  });
});

