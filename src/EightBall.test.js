import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EightBall from "./EightBall";

describe("EightBall", () => {
  test("renders with initial message", () => {
    render(<EightBall />);
    expect(
      screen.getByText(/What question ponders your soul?/i)
    ).toBeInTheDocument();
  });

  test("changes message on click", async () => {
    render(<EightBall />);

    const eightBall = screen.getByRole("button");
    await userEvent.click(eightBall);

    expect(screen.getByText(/Yes/i)).toBeInTheDocument();
  });

  test("changes to random message on multiple clicks", async () => {
    render(<EightBall />);

    const eightBall = screen.getByRole("button");
    await userEvent.click(eightBall);
    await userEvent.click(eightBall);

    expect(screen.queryByText(/Yes/i)).not.toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent(/No/i);
  });

  test("uses provided answers", async () => {
    const customAnswers = [
      { msg: "Custom 1", color: "red" },
      { msg: "Custom 2", color: "blue" },
    ];

    render(<EightBall answers={customAnswers} />);

    const eightBall = screen.getByRole("button");
    await userEvent.click(eightBall);

    expect(screen.getByRole("button")).toHaveTextContent(/Custom 1/i);
  });
});
