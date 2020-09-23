/// <reference types="cypress" />

describe("Blog", () => {
  it("loads", () => {
    cy.visit("/");
  });
});
