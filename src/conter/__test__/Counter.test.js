import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// test("header renders with correct text", () => {
//   const { component } = render(<Counter />);

//   const headerEl = screen.getByTestId("header");

//   expect(headerEl.textContent).toBe("My Counter");
// });

describe("Counter", () => {
  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = +screen.getByTestId("count").textContent;

    expect(countValue).toEqual(0);
  });

  it("counter should increment by 1 if the increment button is clicked", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = +screen.getByTestId("count").textContent;
    expect(countValue).toEqual(1);
  });

  it("counter should decrement by 1 if decrement button is clicked", () => {
    render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = +screen.getByTestId("count").textContent;
    expect(countValue).toEqual(-1);
  });

  it("counter should restart if the restart button is clicked", () => {
    render(<Counter initialCount={1} />);
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    const countValue = +screen.getByTestId("count").textContent;
    expect(countValue).toEqual(0);
  });

  it("counter should switch sign if the switch button is clicked", () => {
    render(<Counter initialCount={1} />);
    fireEvent.click(screen.getByRole("button", { name: "Switch Signs" }));
    const countValue = +screen.getByTestId("count").textContent;
    expect(countValue).toEqual(-1);
  });
});
