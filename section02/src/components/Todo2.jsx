import { useState } from "react";
const Todo2 = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부" },
    { id: 2, text: "게임하기" },
    { id: 3, text: "운동하기" },
  ]);
  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button
              onClick={() => {
                onDelete(todo.id);
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Todo2;
