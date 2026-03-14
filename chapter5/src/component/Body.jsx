import { useState } from "react";

export default ({ children }) => {
  console.log("렌더링");
  let [light, setLight] = useState("off");
  let [text, setText] = useState("");
  const [count, setCount] = useState(0);

  //console.log(props);
  //const { name, location } = props;
  const number = 2;
  const obj = {};

  function handleOnClick(e) {
    // light = "on";
    setLight("on");
    console.log(light);
    console.log(e);
    console.log(e.target.name);
  }

  function onIncrease() {
    setCount(count + 1);
  }

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: "red", color: "blue" }}>body</h1>
        <h2>
          {number}는 {number % 2 === 0 ? "짝수" : "홀수"}
        </h2>
        <div className="body">{children}</div>
        <div className="body">
          <button name="A버튼" onClick={handleOnClick}>
            A 버튼
          </button>
          <button name="B버튼" onClick={handleOnClick}>
            B 버튼
          </button>
        </div>
        <div>{light}</div>
        <div>{count}</div>
        <button onClick={onIncrease}>+</button>
        <div>
          <input onChange={handleOnChange} value={text} />
          <div>{text}</div>
        </div>
      </div>
    </>
  );
};
