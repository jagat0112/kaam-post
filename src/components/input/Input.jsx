import React from "react";
import "./Input.css";

const Input = ({ className, type = "text", label, ...props }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        className={`input-field ${className}`}
        {...props}
      ></input>
    </div>
  );
};

export default Input;
