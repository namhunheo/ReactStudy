import { useState, useRef } from "react";

function Refex() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    alert(text);
    textRef.current.value = "";
  };
  return (
    <>
      <div>
        <input ref={textRef} value={text} onChange={handleOnChange} />
        <button onClick={handleOnClick}>작성 완료</button>
      </div>
    </>
  );
}

export default Refex;
