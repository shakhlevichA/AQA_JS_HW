import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
       screenshotsFolder: './cypress/screen/screenshots',
    videosFolder: './cypress/screen/videos',
    viewportHeight: 720,
    viewportWidth: 1280
  },
});
