import * as React from "react";
import IframeResizer from "iframe-resizer-react";

const Mapa = () => {
  return (
    <IframeResizer
      heightCalculationMethod="lowestElement"
      src="https://hallo.createamec.com/"
      style={{
        width: "1px",
        minWidth: "100%",
        minHeight: "100%",
      }}
    />
  );
};

export default Mapa;
