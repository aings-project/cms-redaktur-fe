/**
 * - Validation spec
 *   - User can validate news without data
 *   - User can validate news with data
 *   - User can revalidate news
 */

import {
  originalDesc,
  originalTitle,
} from "../utils/news_draft_detail_test_util";

describe("Validation Spec", () => {
  beforeEach("Login and Prepare News Data", () => {
    cy.request({
      method: "POST",
      url: `https://redaktur-backend.et.r.appspot.com/v1/auth/login/email`,
      body: {
        email: "adarmono@mail.com",
        password: "12345",
      },
    }).then((response) => {
      const {
        jwt: { token },
      } = response.body;

      cy.request({
        method: "GET",
        url: "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=12",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((resp2) => {
        const totalVersion = resp2.body.total_version;

        cy.request({
          method: "GET",
          url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/67?version=${totalVersion}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((resp3) => {
          const version = resp3.body.draft_berita.id;
          cy.request({
            method: "POST",
            url: `https://redaktur-backend.et.r.appspot.com/v1/draft-berita/${version}`,
            // form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: {
              status: "reviewing",
              title: originalTitle,
              content: originalDesc,
            },
          }).then((resp) => {
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
            cy.get('input[placeholder="Masukkan email"').type(
              "adarmono@mail.com"
            );
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
        });
      });
    });
  });

  it("User can validate news without data", () => {
    // Intercept validation API call
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/validation-automatic/*"
    ).as("validation");

    // Make sure in Detail News page
    cy.get("p").contains("Judul Berita").should("be.visible");

    // Click Validasi Berita button
    cy.get("button").contains("Validasi Berita").click();

    // Click Validasi button on popup
    cy.get("button").filter(":visible").contains("Validasi").click();

    // Wait for validation API calls
    cy.wait("@validation", {
      timeout: 120_000,
    }).then((_) => {
      cy.wait(200);
      // Detect validation result
      cy.get("p").contains("Keterangan").should("exist");
      cy.get("button").contains("Lihat Selengkapnya").should("exist");
    });
  });

  it("User can validate news with data", () => {
    // Intercept validation API call
    cy.intercept(
      "POST",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/validation-with-data/*"
    ).as("validation");

    // Make sure in Detail News page
    cy.get("p").contains("Judul Berita").should("be.visible");

    // Click Validasi Berita button
    cy.get("button").contains("Validasi Berita").click();

    // Check validation data
    cy.get(".ValidationDataCheckbox").check();

    // Fill data
    cy.get(
      'input[placeholder="Proklamasi Kemerdekaan Republik Indonesia"'
    ).type("Cacar Monyet");
    cy.get('input[placeholder="Jalan Pegangsaan Timur no 56 Jakarta"').type(
      "Indonesia"
    );
    cy.get('input[placeholder="17 Agustus 1945. Pukul 10.00 WIB"').type("2023");

    // Click Validasi button on popup
    cy.get("button").filter(":visible").contains("Validasi").click();

    // Wait for validation API calls
    cy.wait("@validation", {
      timeout: 90_000,
    }).then((_) => {
      cy.wait(200);
      // Detect validation result
      cy.get("p").contains("Keterangan").should("exist");
      cy.get("button").contains("Lihat Selengkapnya").should("exist");
    });
  });

  it("User can revalidate news", () => {
    // Intercept validation API call
    cy.intercept(
      "GET",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/validation-automatic/*"
    ).as("validation");

    // Make sure in Detail News page
    cy.get("p").contains("Judul Berita").should("be.visible");

    // Click Validasi Berita button
    cy.get("button").contains("Validasi Berita").click();

    // Click Validasi button on popup
    cy.get("button").filter(":visible").contains("Validasi").click();

    // Wait for validation API calls
    cy.wait("@validation", {
      timeout: 90_000,
    }).then((_) => {
      cy.wait(200);
      // Detect validation result
      cy.get("p").contains("Keterangan").should("exist");
      cy.get("button").contains("Lihat Selengkapnya").should("exist");
    });

    // Show validation popup
    cy.get("button").contains("Lihat Selengkapnya").click({ force: true });

    // Click Validasi Ulang button
    cy.get("button").contains("Validasi Ulang").click();

    // Click Validasi button on popup
    cy.get("button").filter(":visible").contains("Validasi").click();

    // Wait for validation API calls
    cy.wait("@validation", {
      timeout: 90_000,
    }).then((_) => {
      cy.wait(200);
      // Detect validation result
      cy.get("p").contains("Keterangan").should("exist");
      cy.get("button").contains("Lihat Selengkapnya").should("exist");
    });
  });
});
