import React from "react";
import "./styles.css";

import Paper from "./components/paper";
import Header from "./components/header";
import TodoForm from "./components/todoForm";

export default function App() {
  return (
    <Paper>
      <Header />

      <TodoForm />

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
