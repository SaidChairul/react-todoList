import React from "react";

import Todo from "./todo";

const Todos = () => {
  const todos = [
    {
      text: "Belajar React"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar State di React"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar React Hooks"
    },
    {
      text: "Belajar React"
    },
    {
      text: "Belajar State di React"
    }
  ];
  return (
    <section className="sc-todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
