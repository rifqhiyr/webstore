import React, { useState } from "react";
import "../assets/scss/BaseLoading.scss";

const BaseLoading = props => {
  const [load, setLoad] = useState(false);

  const handleLoad = e => {
    setLoad(!load);
    setTimeout(() => {
      setLoad(load);
    }, 3000);
  };

  return (
    <button onClick={handleLoad} className="button-primary">
      {load ? (
        <span>
          <i className="fa fa-circle-o-notch fa-spin" /> loading...
        </span>
      ) : (
        "click for loading"
      )}
    </button>
  );
};

export default BaseLoading;
