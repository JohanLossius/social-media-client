// 1 The user can log in with the login form with valid credentials

describe("Noroff Social Media Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("logs the user in when given valid credentials", () => {
    cy.wait(500);
    cy.get("#registerModal")
      .find("button.btn-outline-success[data-auth='login']")
      .click();
    cy.wait(500);
    cy.get("#loginForm")
      .get("#loginEmail")
      .type("jonaslarsen1234@stud.noroff.no");
    cy.get("#loginPassword").type("12345678");
    cy.get("#loginForm").find("button.btn-success").click();
  });
});
