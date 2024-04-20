// 3 The user can log out with the logout button

const userEmail = "jonaslarsen1234@stud.noroff.no";
const password = "12345678";

describe("the log out function for the Noroff Social Media Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("logs the user out upon clicking the logout button", () => {
    // Logs the user in to perform the logout-test
    cy.wait(500);
    cy.get("#registerModal")
      .find("button.btn-outline-success[data-auth='login']")
      .click();
    cy.wait(500);
    cy.get("#loginForm").get("#loginEmail").type(userEmail);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm").find("button.btn-success").click();
    cy.wait(2500);

    // Perform the logout tests
    cy.window().its("localStorage").should("have.property", "token");
    cy.wait(250);
    cy.get(
      "button.btn-outline-warning[data-auth='logout'][data-visible='loggedIn']",
    ).click();
    cy.wait(250);
    cy.window().its("localStorage").should("not.have.property", "token");
  });
});
