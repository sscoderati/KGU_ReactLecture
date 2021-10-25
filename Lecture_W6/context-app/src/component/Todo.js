import { useReducer, useState } from "react";
import todoReudcer, { todoInitialState } from "../reducer/TodoReducer";
import TodoItem from "./TodoItem";
import useStore from "../hook/useStore";
import { observer } from "mobx-react";

const Todo = ({ title = "TodoList" }) => {
  //const [todoList, todoDispatch] = useReducer(todoReudcer, todoInitialState);
  const {
    todoList,
    createTodo,
    updateTodo,
    delTodo,
    updateTodoStatus
  } = useStore((store) => store.todos);

  const [todoInput, setTodoInput] = useState("");
  const todoItemId =
    todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1;

  const create = () =>
    createTodo({ id: todoItemId, title: todoInput, done: false });

  const update = (id, title) => updateTodo(id, title);
  const del = (id) => delTodo(id);
  const updateStatus = (id) => updateTodoStatus(id);

  return (
    <div>
      {title}
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={create}>추가</button>
      </div>
      <div>
        {todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            del={del}
            update={update}
            updateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(Todo);
