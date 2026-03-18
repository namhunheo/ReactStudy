import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (!content) {
      // content state에 값이 없으면
      inputRef.current.focus();
      return; // 중지
    }
    onCreate(content);
    // content state에 ''값으로 저장
    setContent("");
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기✏️</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
