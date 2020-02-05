import * as React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Example } from "../..";

test("Renders", async () => {
  const { getByRole } = render(<Example />);
  expect(getByRole("heading")).toHaveTextContent("My Component");
});
