import React, { useState } from "react";
import "../assets/scss/BaseLoading.scss";

const BaseLoading = props => {
  const [load, setLoad] = useState(false);

  const hadleLoad = e => {
    setLoad(!load);
    setTimeout(() => {
      setLoad(load);
    }, 3000);
  };

  return (
    <button onClick={hadleLoad} className="button-primary">
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
