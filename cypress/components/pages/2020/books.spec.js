/// <reference types="cypress" />
import { mount } from "cypress-react-unit-test";
import { Book } from "../../../../pages/2020/books-people-reread";

describe("Book", () => {
  it("works", () => {
    const props = {
      URL:
        "https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034",
      ASIN: "0671027034",
      Name: "How to Win Friends & Influence People",
      Votes: 100,
    };
    mount(<Book {...props} />);
    cy.get("a").should("have.attr", "href", props.URL);
  });
});
