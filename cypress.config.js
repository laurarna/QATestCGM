const { defineConfig } = require('cypress');

module.exports = defineConfig({
   e2e: {
    specPattern: 'cypress/integration/**/*.spec.ts',
    supportFile: false,
  },
});