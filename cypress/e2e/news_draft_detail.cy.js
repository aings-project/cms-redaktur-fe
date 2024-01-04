/**
 * - News Draft Detail spec
 *   - User can access Detail Berita Page properly
 *   - User can edit news content
 *   - User can change news version
 *   - User can send news to reporter
 *   - User can reject news
 *   - User can send news back to draft
 */

import api from "../../utils/api";

describe("News Draft Spec", () => {
  beforeEach("Login page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();

    const token = api.getAccessToken();
    console.log(token);

    cy.visit("http://localhost:3000/news_draft/edit/96/1");
  });

  //   it("User can access Detail Berita Page properly", () => {
  //     cy.get("p").contains("Judul Berita").should("be.visible");
  //     cy.get("p").contains("AINGS").should("be.visible");

  //     cy.get("button").contains("Simpan Perubahan").should("be.visible");
  //     cy.get("button").contains("Publikasikan").should("be.visible");
  //     cy.get("button").contains("Tolak Draf Berita").should("be.visible");
  //   });
});
