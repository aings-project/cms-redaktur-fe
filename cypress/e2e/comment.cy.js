/**
 * - Commentary spec
 *   - User can see comments properly
 *   - User can add comments
 */

describe("Commentary Spec", () => {
  beforeEach("Login", () => {
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed"
    ).as("all");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed&title=monyet"
    ).as("Indonesia");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/*"
    ).as("detail");
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    cy.get("button").filter(":visible").contains("Berita").click();
    cy.wait("@all");

    cy.get('input[placeholder="Cari Judul Berita ..."').type("monyet");

    cy.wait("@Indonesia");

    cy.get(".NewsDraftItem").first().click();

    cy.wait("@detail");
  });

  it("User can see comments properly", () => {
    cy.get("p").contains("Judul Berita").should("be.visible");

    cy.get("p").contains("Komentar").click();

    cy.get(".CommentItem").should("be.visible");
    cy.get("textarea").should("be.visible");
  });

  it("User can add comments", () => {
    cy.get("p").contains("Judul Berita").should("be.visible");

    cy.get("p").contains("Komentar").click();

    const now = Date.now();

    cy.get(".CommentItem").should("be.visible");
    cy.get("textarea").should("be.visible");

    cy.get("textarea").type(`test comment ${now}`);
    cy.get(".CommentSendButton").click();

    cy.get("p").contains(`test comment ${now}`).should("be.visible");
  });
});
