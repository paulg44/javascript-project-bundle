// Playwright test file for homepage
// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://paulg44.github.io/javascript-project-bundle/");
});

// Basic has title test
test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("Homepage");
});

// Check a link on project works
test("link to project", async ({ page }) => {
  // Arrange
  //   Used the locator method as all the links have the same role and name
  const linkBtn = page.locator('[href="./SawRPS/index.html"]');

  //   Act
  await linkBtn.click();
  // Assert
  await expect(page).toHaveTitle("Vanilla JavaScript Bundle of Projects");
});
