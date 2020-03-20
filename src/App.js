import React from "react";
import "./styles.css";
import Paper from "./components/paper";
import Header from "./components/header";

export default function App() {
  return (
    <Paper>
      <Header />

      <section className="sc-add">
        <form action="" className="sc-addForm">
          <input type="text" className="sc-addInput" />
          <button className="sc-addBtn main-darkslategray-color">Add</button>
        </form>
      </section>

      <section className="sc-todos">
        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>

        <div className="sc-todo">
          <span className="sc-todoText">Learning React</span>
        </div>
      </section>
    </Paper>
  );
}
