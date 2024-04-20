const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});

// The following keys were removed from line 5 due to not being used:

// setupNodeEvents(on, config))
