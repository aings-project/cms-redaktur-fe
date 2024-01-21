/**
 * - Activity spec
 *   - User can navigate to Log Activity Page
 *   - User can navigate to Detail News Draft Page from activity
 *   - User can filter log activities
 */

describe("Activity Spec", () => {
  beforeEach("Login", () => {
    cy.visit("http://localhost:3000/");

    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();
  });

  it("User can navigate to Log Activity Page", () => {
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/activity-logs?page=1&limit=10"
    ).as("all");
    cy.get("button").filter(":visible").contains("Aktivitas").click();

    cy.wait("@all");

    cy.get("p")
      .filter(":visible")
      .contains("Log Aktivitas")
      .should("be.visible");
    cy.get(".ActivityItemCard").should("be.visible");
  });

  it("User can navigate to Detail News Draft Page from activity", () => {
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/activity-logs?page=1&limit=10"
    ).as("all");
    cy.get("button").filter(":visible").contains("Aktivitas").click();

    cy.get(".ActivityItemCard").should("be.visible");
    cy.get(".ActivityItemCard").first().click();

    cy.get("p").contains("Judul Berita");
  });

  it("User can filter log activities", () => {
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/activity-logs?page=1&limit=10"
    ).as("all");
    cy.get("button").filter(":visible").contains("Aktivitas").click();

    cy.get("input").filter(":visible").type("Menambahkan Draf{enter}");

    cy.get(".ActivityItemCard").each(($el, _, __) => {
      cy.wrap($el).contains("Menambahkan berita");
    });
  });
});
