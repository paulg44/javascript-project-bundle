// Test file for Saw game
// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto(
    "https://paulg44.github.io/javascript-project-bundle/SawRPS/index.html"
  );
});

test("has saw title", async ({ page }) => {
  await expect(page).toHaveTitle("Vanilla JavaScript Bundle of Projects");
});

// Test user input
test("user inputs name", async ({ page }) => {
  const userInput = page.getByRole("textbox", { name: "What is your name?" });
  const userWelcome = page.getByRole("heading", {
    name: "Hello Paul, I want to play a game",
  });
  const rockBtn = page.getByRole("button", { name: "Rock" });
  const paperBtn = page.getByRole("button", { name: "paper" });
  const scissorsBtn = page.getByRole("button", { name: "Scissors" });

  await userInput.fill("Paul");
  await page.keyboard.press("Enter");

  expect(userWelcome).toBeVisible();
  expect(rockBtn).toBeVisible;
  expect(paperBtn).toBeVisible;
  expect(scissorsBtn).toBeVisible;
});
