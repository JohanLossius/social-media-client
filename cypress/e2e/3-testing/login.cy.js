// 1 The user can log in with the login form with valid credentials

const userEmail = "jonaslarsen1234@stud.noroff.no";
const password = "12345678";

describe("the user logging in with valid credentials for the Noroff Social Media Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("logs the user in when given valid credentials", () => {
    cy.wait(500);
    cy.get("#registerModal")
      .find("button.btn-outline-success[data-auth='login']")
      .click();
    cy.wait(500);
    cy.get("#loginForm").get("#loginEmail").type(userEmail);
    cy.get("#loginPassword").type(password);
    cy.get("#loginForm").find("button.btn-success").click();
    cy.wait(500);
    cy.window().its("localStorage").should("have.property", "token");
  });
});
