import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

test("renders Smart Goal Planner header", () => {
  render(<App />);
  const header = screen.getByText(/Smart Goal Planner/i);
  expect(header).toBeInTheDocument();
});
