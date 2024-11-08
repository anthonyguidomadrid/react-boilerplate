import { screen } from "@testing-library/react";
import { Home } from "./Home";
import { renderWithProviders } from "../../utils";

test("renders welcome message", () => {
  renderWithProviders(<Home />);
  const welcomeElement = screen.getByText("Welcome to the app!");
  expect(welcomeElement).toBeInTheDocument();
});
