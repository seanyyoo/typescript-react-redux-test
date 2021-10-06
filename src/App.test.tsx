import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

test("renders a page with users table", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("renders a page with search bar", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const search = screen.getByRole("textbox");
  expect(search).toBeInTheDocument();
});
