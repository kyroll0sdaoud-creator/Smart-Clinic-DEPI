// src/components/FormField.jsx
import React from "react";

export default function FormField({
  id,
  label,
  required,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  min,
  step,
}) {
  return (
    <div className={`form-group${error ? " has-error" : ""}`}>
      <label htmlFor={id}>
        {label} {required && <span className="required-mark">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        min={min}
        step={step}
      />
      <p className={`field-error${error ? " visible" : ""}`}>{error}</p>
    </div>
  );
}
