// Playwright test file for homepage
// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://paulg44.github.io/javascript-project-bundle/");

  //   Expect title to be
  await expect(page).toHaveTitle("Homepage");
});
