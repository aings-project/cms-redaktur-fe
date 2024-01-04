/**
 * - Overview spec
 *   - User can see Ikhtisar page properly
 *   - User redirected to Detail Berita page when click content in "Terakhir Diubah" section
 *   - User redirected to Detail Berita page when click content in "Aktivitas Terbaru" section
 */

describe("Overview Spec", () => {
  beforeEach("Login page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();
  });

  it("User can see Ikhtisar page properly", () => {
    cy.get("p").contains("Terakhir Diubah").should("be.visible");
    cy.get("div").filter(".OverviewNewsDraftItem").should("be.visible");
    cy.get("p").contains("Statistik Berita").should("be.visible");
    cy.get("p").contains("Berdasarkan").should("be.visible");
    cy.get("p").contains("Disunting").should("be.visible");
    cy.get("p").contains("Aktivitas Terbaru").should("be.visible");
  });

  it('User redirected to Detail Berita page when click content in "Terakhir Diubah" section', () => {
    cy.get("p").contains("Terakhir Diubah").should("be.visible");
    cy.get("div").filter(".OverviewNewsDraftItem").first().click();
    cy.get("p").contains("Judul Berita");
  });

  it('User redirected to Detail Berita page when click content in "Aktivitas Terbaru" section', () => {
    cy.get("p").contains("Aktivitas Terbaru").should("be.visible");
    cy.get("div").filter(".OverviewActivityItem").first().click();
    cy.get("p").contains("Judul Berita");
  });
});
