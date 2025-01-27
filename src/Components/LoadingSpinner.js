import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  return (
    <div>
      <div className="loading-spinner">
        {/* Your loading spinner component's JSX here */}
        {/* For example: */}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
