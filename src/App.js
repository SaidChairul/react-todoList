import React from "react";
import "./styles.css";
import Paper from "./components/paper";

export default function App() {
  return (
    <Paper>
      <section className="sc-header">
        <button className="sc-headerBtn main-darkslategray-color">ADD</button>
        <h1 className="sc-title">Todo List</h1>
        <button className="sc-headerBtn main-sandybrown-color">CLEAR</button>
      </section>

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
