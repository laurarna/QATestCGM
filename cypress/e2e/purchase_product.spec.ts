describe('E2E Test for SauceDemo', () => {
	beforeEach(() => {
			cy.visit('https://www.saucedemo.com/');
	});

	it('should add a product to the cart and complete the purchase', () => {
			// Login
			cy.get('[data-test="username"]').type('standard_user');
			cy.get('[data-test="password"]').type('secret_sauce');
			cy.get('[data-test="login-button"]').click();

			// Add product to cart
			cy.get('.inventory_item').first().find('button').click();

			// Go to cart
			cy.get('.shopping_cart_link').click();
			
			// Checkout
			cy.get('[data-test="checkout"]').click();

			// Fill in checkout information
			cy.get('[data-test="firstName"]').type('John');
			cy.get('[data-test="lastName"]').type('Doe');
			cy.get('[data-test="postalCode"]').type('12345');
			cy.get('[data-test="continue"]').click();

			// Finish purchase
			cy.get('[data-test="finish"]').click();

			// Verify purchase completion
			cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
	});
});
