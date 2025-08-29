import React from "react";

const Button = ({ type = "button", children, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-primary ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
