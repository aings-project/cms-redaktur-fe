/**
 * - News Draft spec
 *   - User can access Daftar Berita Page properly
 *   - User can filter content with tab
 *   - User can filter content with dropdown
 *   - User can do search
 */

describe("News Draft Spec", () => {
  beforeEach("Login page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('input[placeholder="Masukkan email"').type("adarmono@mail.com");
    cy.get('input[placeholder="Masukkan Kata Sandi"').type("12345");
    cy.get("button")
      .contains(/^Login$/)
      .click();
  });

  it("User can access Daftar Berita Page properly", () => {
    // verify element
    cy.get("button").filter(":visible").contains("Berita").click();

    // tabs
    cy.get("p").contains("Draf Berita").should("be.visible");
    cy.get("p").contains("Publikasi Berita").should("be.visible");
    cy.get("p").contains("Berita Ditolak").should("be.visible");

    // dropdown
    cy.get("p").filter(":visible").contains("Status:").should("be.visible");

    // search bar
    cy.get('input[placeholder="Cari Judul Berita ..."').should("be.visible");

    // content
    cy.get("div").filter(".NewsDraftItem").should("be.visible");
  });

  it("User can filter content with tab", () => {
    // verify element
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed"
    ).as("all");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=published"
    ).as("published");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=rejected"
    ).as("rejected");
    cy.get("button").filter(":visible").contains("Berita").click();
    cy.wait("@all");

    cy.get("p").contains("Publikasi Berita").click();
    cy.wait("@published");
    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Sudah Publikasi");
    });

    cy.get("p").contains("Berita Ditolak").click();
    cy.wait("@rejected");
    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Draf Ditolak");
    });
  });

  it("User can filter content with dropdown", () => {
    // verify element
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed"
    ).as("all");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new"
    ).as("new");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=reviewing"
    ).as("reviewing");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=reviewed"
    ).as("reviewed");
    cy.get("button").filter(":visible").contains("Berita").click();
    cy.wait("@all");

    cy.get("p").contains("Draf Berita").should("be.visible");

    cy.get("select").filter(":visible").select("Baru");
    cy.wait("@new");
    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Baru");
    });

    cy.get("select").filter(":visible").select("Sedang Disunting");
    cy.wait("@reviewing");
    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Sedang Disunting");
    });

    cy.get("select").filter(":visible").select("Dikembalikan Ke Wartawan");
    cy.wait("@reviewed");
    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Dikembalikan Kepada Wartawan");
    });
  });

  it("User can search news draft", () => {
    // verify element
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed&title=Indonesia"
    ).as("Indonesia");
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita?page=1&limit=10&status=new,reviewing,reviewed"
    ).as("all");

    cy.get("button").filter(":visible").contains("Berita").click();

    cy.wait("@all");

    cy.get("p").contains("Draf Berita").should("be.visible");

    cy.get('input[placeholder="Cari Judul Berita ..."').type("Indonesia");

    cy.wait("@Indonesia");

    cy.get(".NewsDraftItem").each(($el, _, __) => {
      cy.wrap($el).contains("Indonesia");
    });
  });
});
