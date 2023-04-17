import React from "react";
import "./Checkbox.css";

export interface CheckboxProps {
  checked: boolean;
  onChange: (newValue: boolean) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default Checkbox