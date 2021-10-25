import { useState } from "react";

export default function TodoItem({ todo, del, update, updateStatus }) {
  const [edit, setEdit] = useState(false);

  return (
    <div
      className={`todoItem ${todo.done && "isDone"}`}
      onClick={() => updateStatus(todo.id)}
    >
      {edit ? (
        <input
          type="text"
          defaultValue={todo.title}
          onBlur={(e) => {
            setEdit(false);
            update(todo.id, e.target.value);
          }}
        />
      ) : (
        <span className="title" onClick={(e) => setEdit(!edit)}>
          {todo.title}
        </span>
      )}
      <button onClick={() => del(todo.id)}>삭제</button>
    </div>
  );
}
