import React from "react";

const Label = ({ htmlFor, children, className }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-300 ${className || ""}`}
    >
      {children}
    </label>
  );
};

export { Label };
