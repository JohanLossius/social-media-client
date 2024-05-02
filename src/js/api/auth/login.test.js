// The login function stores a token

import { login } from "./login.js";
import { save } from "../../storage/save.js";

// Mock the save function
jest.mock("../../storage/save.js", () => ({
  save: jest.fn(),
}));

// Mock the fetch function
global.fetch = jest.fn();

// Test the login function
describe("login function", () => {
  it("stores a token in local storage", async () => {
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({
        accessToken: "iAmAMockToken",
      }),
    };

    // Mock the fetch function to return the mockResponse
    fetch.mockResolvedValue(mockResponse);

    // Call the login function
    await login("example@example.io", "passcode");

    // Check that the save function via the login functionality was called with the correct arguments, and correct nr. of times
    expect(save).toHaveBeenCalledWith("token", "iAmAMockToken");
    expect(save).toHaveBeenCalledTimes(2);
  });
});
