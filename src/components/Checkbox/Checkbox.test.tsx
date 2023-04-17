import { render, fireEvent, screen } from "@testing-library/react";
import Checkbox, { CheckboxProps } from "./index";

describe("Checkbox component", () => {
  const defaultProps: CheckboxProps = {
    checked: false,
    onChange: jest.fn(),
  };

  it("should render unchecked checkbox", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("should render checked checkbox", () => {
    render(<Checkbox {...defaultProps} checked={true} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("should call onChange when checkbox is clicked", () => {
    const handleChange = jest.fn();
    render(<Checkbox {...defaultProps} onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });
});