import React, { forwardRef, useId } from "react";
import "./Input.css";

const Input = forwardRef(
  ({ className, type = "text", label, ...props }, ref) => {
    const id = useId();
    return (
      <div className="input-container">
        {label && (
          <label className="input-label" htmlFor={id}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={`input-field ${className}`}
          name={id}
          ref={ref}
          {...props}
        ></input>
      </div>
    );
  }
);

export default Input;
