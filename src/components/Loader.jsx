import React from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { MutatingDots } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <MutatingDots height="100" width="100" color="indianred" ariaLabel="Loading" />
    </div>
  );
}

export default Loader;
