import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, handlePage } = useGlobalContext();
  return (
    <div className="buttons">
      <button className="btn prev" onClick={() => handlePage("dec")}>
        Prev
      </button>
      <h4>
        page {page} / {nbPages}
      </h4>
      <button className="btn next" onClick={() => handlePage("inc")}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
