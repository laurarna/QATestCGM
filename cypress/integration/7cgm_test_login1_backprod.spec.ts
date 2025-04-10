// cypress/integration/7cgm_test_login1_backprod.spec.ts

describe('E2E Test for Sauce Demo - Back to products and continue shopping', () => {
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

        // Verify the product is in the cart
        cy.get('.cart_item').should('have.length', 1);
    });

    it('should return to the products page when clicking "Continue Shopping"', () => {
        // Click the "Continue Shopping" button
        cy.get('[data-test=continue-shopping]').click();

        // Verify the URL to ensure we are back on the products page
        cy.url().should('include', '/inventory.html');

        // Verify the presence of the products list
        cy.get('.inventory_list').should('be.visible');
    });
});
