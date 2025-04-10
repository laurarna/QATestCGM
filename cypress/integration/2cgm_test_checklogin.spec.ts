// cypress/integration/2cgm_test_checklogin.spec.ts

describe('CGM Test for Sauce Demo - Login Combinations', () => {
  
  //Define an array of users with:username, password, expectedUrl,errorMessage
  const users = [
      { username: 'standard_user', password: 'secret_sauce', expectedUrl: '/inventory.html', errorMessage: null },
      { username: 'locked_out_user', password: 'secret_sauce', expectedUrl: null, errorMessage: 'Epic sadface: Sorry, this user has been locked out.' },
      { username: 'problem_user', password: 'secret_sauce', expectedUrl: '/inventory.html', errorMessage: null },
      { username: 'performance_glitch_user', password: 'secret_sauce', expectedUrl: '/inventory.html', errorMessage: null },
	  { username: 'error_user', password: 'secret_sauce', expectedUrl: '/inventory.html', errorMessage: null },
	  { username: 'visual_user', password: 'secret_sauce', expectedUrl: '/inventory.html', errorMessage: null },
  ];
  
  //For each user create a dynamic output using errorMessage to understand if the test should pass or fail.
  users.forEach((user) => {
      it(`should ${user.errorMessage ? 'fail' : 'succeed'} login for ${user.username}`, () => {
          // Go to Sauce Demo website with the current user credentials
          cy.visit('https://saucedemo.com/');
          cy.get('#user-name').type(user.username);
          cy.get('#password').type(user.password);
          cy.get('#login-button').click();

          if (user.expectedUrl) {
              // Verify successful login by checking the URL
              cy.url().should('include', user.expectedUrl);
          } else {
              // Verify the error message is displayed
              cy.get('[data-test=error]').should('contain', user.errorMessage);
          }
      });
  });
});
