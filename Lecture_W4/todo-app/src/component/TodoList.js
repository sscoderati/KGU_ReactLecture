import React, { useState } from "react";
import TodoTable from "./TodoTable";
import { nextStepIndex, createDataId } from "../util/pureFunc";
import { TYPES } from "../util/constantVal";

import "../style/TodoList.css";
const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("normal");
  const [todoList, setTodoList] = useState([]);

  const handleToodInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSelectPrior = (e) => {
    setPriority(e.target.value);
  };

  const SaveBtnClick = () => {
    let date = new Date();
    const todoObject = {
      type: "todo",
      todo,
      priority,
      saveDate: date.toLocaleString(),
      dataId: createDataId(date)
    };

    setTodoList([...todoList, todoObject]);

    setTodo("");
    setPriority("normal");
  };

  const reset = () => {
    setTodo("");
    setPriority("normal");
    setTodoList([]);
  };

  const checkBoxClick = (item) => {
    return (e) => {
      const nextIndex = nextStepIndex(item.type);
      const filteredList = todoList.filter(
        (todo) => todo.dataId !== item.dataId
      );
      setTodoList([...filteredList, { ...item, type: TYPES[nextIndex] }]);
    };
  };

  return (
    <>
      <h1 className="headTitle">TodoList</h1>
      <div className="form">
        <input
          type="text"
          name="title"
          onChange={handleToodInput}
          value={todo}
        />
        <select name="priority" onChange={handleSelectPrior} value={priority}>
          <option value="normal">일반</option>
          <option value="high">높음</option>
          <option value="low">낮음</option>
        </select>
        <button name="save" onClick={SaveBtnClick}>
          저장
        </button>

        <button name="clear" onClick={reset}>
          전체 초기화
        </button>
      </div>
      <TodoTable status="todo" list={todoList} checkBoxClick={checkBoxClick} />
      <TodoTable status="doing" list={todoList} checkBoxClick={checkBoxClick} />
      <TodoTable status="done" list={todoList} checkBoxClick={checkBoxClick} />
    </>
  );
};

export default TodoList;