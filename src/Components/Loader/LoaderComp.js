import React from "react";
import Loader from "react-loader-spinner";

const LoaderComp = ({ type, height, color, hidden }) => {
  return (
    <div>
      <div className="App">
        <Loader height={`${height}`} type={`${type}`} color={`${color}`} />
        {hidden ? "" : <p style={{ color: "#738998" }}>Loading...</p>}
      </div>
    </div>
  );
};

export default LoaderComp;
