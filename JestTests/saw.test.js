// Unit test file for saw game

import { test, expect } from "@jest/globals";

import {
  userInput,
  userWelcome,
  rockBtn,
  paperBtn,
  scissorsBtn,
  iWantAudio,
} from "../SawRPS/rps";

test("user inputs name", () => {
  // Mock user input
  const mockInput = { key: "Enter" };

  // Simulate keypress
  userInput.dispatchEvent(new KeyboardEvent("keypress", mockInput));

  // Buttons should be visible
  expect(paperBtn.style.visibility).toBe("visible");
  expect(rockBtn.style.visibility).toBe("visible");
  expect(scissorsBtn.style.visibility).toBe("visible");

  // Message should be displayed
  expect(userWelcome.textContent).toContain("Hello");

  // Welcome audio should play
  expect(iWantAudio.play).toHaveBeenCalled();
});
