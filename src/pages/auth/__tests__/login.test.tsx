import { render, screen } from "@testing-library/react";
import LoginPage from "../login.page";

describe("test rendering page login", () => {
  it("should show footer content", () => {
    render(<LoginPage />);
    expect(screen.getByText(/This is footer/)).toBeInTheDocument();
  });
});
