import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState(["리액트 공부", "게임하기", "운동하기"]);

  const onDelete = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => onDelete(index)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
