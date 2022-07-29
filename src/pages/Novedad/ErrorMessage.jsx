import React from "react";
import { TbError404 } from "react-icons/tb";

function ErrorMessage({ children }) {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "75vh" }}
    >
      <TbError404 size={100} />
      <p className="text-center">{children}</p>
    </div>
  );
}

export default ErrorMessage;