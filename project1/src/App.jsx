import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import { use, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const didMountRef = useRef(false);

  /*
  두 번째 매개변수(의존배열)이 없으면 렌더링될때마다
  두 번째 매개변수(의존배열)이 비어있으면[] 최초 1번만 실행
  */

  //컴포넌트가 업데이트될 때마다 (최초 제외)실행되는 useEffect
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  // 의존배열없이 (렌더링 될때마다 최초+재렌더링)
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜박");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  useEffect(() => {
    console.log("최초 1번만 실행");
  }, []);

  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <section>
          <Viewer count={count} />
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section>
      </div>
    </>
  );
}

export default App;
