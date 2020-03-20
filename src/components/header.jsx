import React from "react";

const Header = ({ children }) => {
  return (
    <section className="sc-header">
      <button className="sc-headerBtn main-darkslategray-color">ADD</button>
      <h1 className="sc-title">Todo List</h1>
      <button className="sc-headerBtn main-sandybrown-color">CLEAR</button>
    </section>
  );
};

export default Header;
