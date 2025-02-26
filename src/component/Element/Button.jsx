import React, { Children } from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <>
      <button className={`btn btn-soft ${className}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
