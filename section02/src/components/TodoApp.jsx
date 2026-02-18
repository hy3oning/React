import { useRef, useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 공부하기" },
    { id: 2, text: "책읽기" },
    { id: 3, text: "게임하기" },
  ]);

  const [text, setText] = useState(""); // 추가 input
  const idRef = useRef(4);

  // ✅ 인라인 수정용 state
  const [editingId, setEditingId] = useState(null); // 지금 수정 중인 todo id (없으면 null)
  const [editingText, setEditingText] = useState(""); // 수정 input 값

  const onChangeText = (e) => setText(e.target.value);

  const onCreate = () => {
    const trimmed = text.trim();
    if (trimmed === "") return;

    const newTodo = { id: idRef.current++, text: trimmed };
    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const onDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    // 삭제가 수정 중인 항목이면 수정 모드도 종료
    if (editingId === id) {
      setEditingId(null);
      setEditingText("");
    }
  };

  // ✅ 수정 시작: 그 줄을 input으로 바꾸기
  const onStartEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  // ✅ 수정 취소
  const onCancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  // ✅ 수정 저장 (map = update)
  const onSaveEdit = () => {
    const trimmed = editingText.trim();
    if (trimmed === "") return;

    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === editingId ? { ...todo, text: trimmed } : todo,
      ),
    );

    setEditingId(null);
    setEditingText("");
  };

  // 수정 input에서 Enter/Esc 처리
  const onEditKeyDown = (e) => {
    if (e.key === "Enter") onSaveEdit();
    if (e.key === "Escape") onCancelEdit();
  };

  return (
    <div>
      <h2>Todo</h2>

      {/* 추가 영역 */}
      <div>
        <input
          value={text}
          onChange={onChangeText}
          onKeyDown={(e) => e.key === "Enter" && onCreate()}
          placeholder="할 일 입력"
        />
        <button onClick={onCreate}>추가</button>
      </div>

      {/* 리스트 영역 */}
      <div>
        {todos.map((todo) => {
          const isEditing = editingId === todo.id;

          return (
            <div key={todo.id} style={{ display: "flex", gap: 8 }}>
              {isEditing ? (
                <>
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onKeyDown={onEditKeyDown}
                    autoFocus
                  />
                  <button onClick={onSaveEdit}>저장</button>
                  <button onClick={onCancelEdit}>취소</button>
                </>
              ) : (
                <>
                  <span>{todo.text}</span>
                  <button onClick={() => onStartEdit(todo)}>수정</button>
                  <button onClick={() => onDelete(todo.id)}>삭제</button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
