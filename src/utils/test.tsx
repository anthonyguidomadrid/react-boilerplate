import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n"; // Adjust path if needed
import { store } from "../store"; // Adjust path if needed

// Create a single instance of QueryClient for all tests
const queryClient = new QueryClient();

// Custom render function to wrap components with necessary providers
export const renderWithProviders = (ui: React.ReactNode) =>
  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <I18nextProvider i18n={i18n}>{ui}</I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
