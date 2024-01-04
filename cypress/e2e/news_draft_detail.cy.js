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
import {
  originalDesc,
  originalTitle,
} from "../utils/news_draft_detail_test_util";

// async function fetchWithAuth(url, options = {}) {
//   return fetch(url, {
//     ...options,
//     headers: {
//       ...options.headers,
//       Authorization: `Bearer ${options.token}`,
//     },
//   });
// }

// async function updateNewsDraft({ title, content, status, id, token }) {
//   const response = await fetchWithAuth(`${BASE_URL}/v1/draft-berita/${id}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title,
//       content,
//       status,
//     }),
//     token,
//   });

//   const responseJson = await response.json();

//   const { error } = responseJson;

//   if (error) {
//     const { message } = error;
//     throw new Error(message);
//   }

//   return responseJson;
// }

describe("News Draft Spec", () => {
  beforeEach("Login page", () => {
    cy.request({
      method: "POST",
      url: `https://redaktur-backend.et.r.appspot.com/v1/auth/login/email`,
      // form: true,
      body: {
        email: "adarmono@mail.com",
        password: "12345",
      },
    }).then((response) => {
      // const responseJson = response.json();
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

  it("User can access Detail Berita Page properly", () => {
    cy.get("p").contains("Judul Berita").should("be.visible");
    cy.get("p").contains("AINGS").should("be.visible");
    cy.get("button").contains("Simpan Perubahan").should("be.visible");
    cy.get("button").contains("Publikasikan").should("be.visible");
    cy.get("button").contains("Tolak Draf Berita").should("be.visible");
  });

  it("User can edit news", () => {
    cy.intercept(
      "POST",
      "https://redaktur-backend.et.r.appspot.com/v1/draft-berita/*"
    ).as("save");

    cy.get("p").contains("Judul Berita").should("be.visible");
    cy.get("p").contains("AINGS").should("be.visible");

    cy.get(
      'input[value="Penanganan Kasus Penyakit Cacar Monyet di Indonesia di Tahun 2023 Harus Lebih Masif"]'
    ).should("be.visible");

    cy.get("p").contains("Pertama-tama, perlu").should("be.visible");

    cy.get(".EditorBodyTitleInput").clear();
    cy.get(".prose").clear({ force: true });

    cy.get(".EditorBodyTitleInput").type("abcd");
    cy.get(".prose").first().type("defg");

    cy.get("button").contains("Simpan Perubahan").click();

    cy.wait("@save");

    cy.get('input[value="abcd"]').should("be.visible");
    cy.get("p").contains("defg").should("be.visible");
  });
});
