import React from "react";
import { render } from "@testing-library/react";
import About from "./index";

test("renders learn react link", () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About page/i);
  expect(linkElement).toBeInTheDocument();
});
