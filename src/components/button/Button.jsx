import React from "react";
import "./Button.css";

const Button = ({ name, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {name}
    </button>
  );
};

export default Button;
