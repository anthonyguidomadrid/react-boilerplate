import { screen } from "@testing-library/react";
import { Home } from "./Home";
import { I18nextProvider } from "react-i18next";
import renderWithProviders from "../../utils/test";

test("renders welcome message", () => {
  renderWithProviders(<Home />);
  const welcomeElement = screen.getByText("Welcome to the app!");
  expect(welcomeElement).toBeInTheDocument();
});
