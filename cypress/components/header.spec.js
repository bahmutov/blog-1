import { mount } from "cypress-react-unit-test";
import Header from "../../components/header";

describe("header", () => {
  it("works", () => {
    mount(
      <Header
        title="7 Principles of Rich Web Applications"
        date="November 4, 2014"
        views={1001}
      />
    );
  });
});
