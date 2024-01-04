/**
 * - Authentication spec
 *   - User can access login page
 *   - User can't login with empty email field
 *   - User can't login with empty password field
 *   - User can't login with wrong account information
 *   - User can login with correct account information
 *   - User can logout
 */

describe("Authentication spec", () => {
  beforeEach("Visit page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("User can access login page", () => {
    // verify element
    cy.get('input[placeholder="Masukkan email"').should("be.visible");
    cy.get('input[placeholder="Masukkan Kata Sandi"').should("be.visible");
    cy.get("button")
      .contains(/^Login$/)
      .should("be.visible");
  });

  it("User can't login with empty email field", () => {
    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("div")
      .contains("/body/email must match format")
      .should("be.visible");
  });

  it("User can't login with empty password field", () => {
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("div").contains("Invalid username or password").should("be.visible");
  });

  it("User can't login with wrong account information", () => {
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("adarmono@mail.com");
    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("div").contains("Invalid username or password").should("be.visible");
  });

  it("User can login with correct account information", () => {
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("p").contains("Terakhir Diubah").should("be.visible");
  });

  it("User can logout", () => {
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();
    cy.get("p").contains("Terakhir Diubah").should("be.visible");
    cy.get("button").filter(":visible").contains("Keluar").click();
    cy.get('input[placeholder="Masukkan email"').should("be.visible");
  });
});
