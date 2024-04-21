// 2 The user cannot submit the login form with invalid credentials and is shown a message.

const falseEmail = "falseemail@stud.noroff.no";
const invalidFormatEmail = "falseemail@gmail.com";
const examplePassword = "12345678";

describe("invalid login attempts for the Noroff Social Media Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("prevents the user from logging in with an invalid email format and the user is shown a message to correct this", () => {
    cy.wait(500);
    cy.get("#registerModal")
      .find("button.btn-outline-success[data-auth='login']")
      .click();
    cy.wait(500);
    cy.get("#loginPassword").type(examplePassword);
    cy.get("#loginForm").get("#loginEmail").type(invalidFormatEmail);
    cy.get("#loginForm").find("button.btn-success").click();
    cy.get("#loginEmail")
      .should(
        "have.attr",
        "title",
        "Only Noroff student or teacher emails are valid.",
      )
      .should("be.visible");
    cy.wait(2500);
  });

  it("prevents the user from logging in with invalid credentials and shows the user a message", () => {
    cy.wait(500);
    cy.get("#registerModal")
      .find("button.btn-outline-success[data-auth='login']")
      .click();
    cy.wait(500);
    cy.get("#loginForm").get("#loginEmail").type(falseEmail);
    cy.get("#loginPassword").type(examplePassword);
    cy.get("#loginForm").find("button.btn-success").click();
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.equal(
        "Either your username was not found or your password is incorrect",
      );
    });
  });
});
