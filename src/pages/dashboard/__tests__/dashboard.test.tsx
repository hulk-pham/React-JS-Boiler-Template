import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderWithProviders } from "utils/test-utils";
import DashboardPage from "../index.page";

export const handlers = [
  rest.get("/api/user", (req, res, ctx) => {
    return res(ctx.json("John Smith"), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

test("render login page", async () => {
  renderWithProviders(<DashboardPage />);
  expect(
    screen.getByText(new RegExp("DashboardPage", "i"))
  ).toBeInTheDocument();
});
