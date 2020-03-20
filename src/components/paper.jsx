import React from "react";
import PropTypes from "prop-types";

const Paper = ({ children }) => {
  // prop = {children}
  return (
    <div className="sc-container">
      <div className="sc-frame">{children}</div>
    </div>
  );
};

// mendefinisikan type children
Paper.prototype = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
