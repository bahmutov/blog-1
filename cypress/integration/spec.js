/// <reference types="cypress" />

describe("Blog", { viewportWidth: 600, viewportHeight: 1200 }, () => {
  it("loads", () => {
    cy.visit("/");
  });

  it("has anchor tags", () => {
    cy.visit("2020/develop-preview-test");
    cy.contains("a", "#")
      .scrollIntoView()
      .should("not.have.attr", "href", "#undefined");
  });

  it("has anchor tags using cy.contains with message", () => {
    cy.visit("2020/develop-preview-test");
    cy.contains("a", "#")
      .scrollIntoView()
      .should($a => {
        const message = $a.parent().parent().text();
        expect($a, message).to.not.have.attr("href", "#undefined");
      });
  });

  it("has anchor tags using cy.get and .each", () => {
    cy.visit("2020/develop-preview-test");
    cy.get("a:contains(#)").each($a => {
      const message = $a.parent().parent().text();
      expect($a, message).to.not.have.attr("href", "#undefined");
    });
  });
});
