import React from "react";

const Button = ({ title, onClick }) => (
  <button className="Button" onClick={onClick}>
    {title}
  </button>
);

export { Button };
