// cypress/integration/1cgm_test_checksite.spec.ts

describe('CGM Test for Sauce Demo - Site Reachability', () => {
   it('should load the SauceDemo homepage', () => {
       // Go to SauceDemo website
       cy.visit('https://saucedemo.com/');

       // Verify the page title
       cy.title().should('include', 'Swag Labs');

       // Verify the presence of the login button
       cy.get('#login-button').should('be.visible');
   });
});
