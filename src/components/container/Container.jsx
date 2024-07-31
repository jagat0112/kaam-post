import React from "react";
import "./Container.css"; // Ensure the CSS file is imported

const Container = ({ children, className }) => {
  return <div className={`container ${className}`}>{children}</div>;
};

export default Container;
