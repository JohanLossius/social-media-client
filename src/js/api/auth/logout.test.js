// Logout: The logout function clears the token and profile from browser storage

import { remove } from "../../storage/remove.js";
import { logout } from "./logout.js";

jest.mock("../../storage/remove.js", () => ({
  remove: jest.fn(),
}));

describe("logout function", () => {
  it("clears the token and profile from browser local storage", () => {
    // Call logout function
    logout();

    // Check if remove function was called correct nr. of times and with the right arguments
    expect(remove).toHaveBeenCalledTimes(2);
    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");
  });
});
