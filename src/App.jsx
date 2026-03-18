import { useReducer, useRef, useCallback } from "react";
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import TestComp from "./component/TestComp";

function reducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it,
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }

    default:
      return state;
  }
  return state;
}

// 목데이터
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  // id값
  const idRef = useRef(3);
  // todo : state변수, setTodo : 세터함수 <- 배열로 대입 useState함수의 리턴값
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);

  const onCreate = (content) => {
    // dispatch함수 호출
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createdDate: new Date().getTime(),
      },
    });

    // 사용자가 작성한 내용으로 객체 생성
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   isDone: false,
    //   createdDate: new Date().getTime(),
    // };
    // 생성한 객체를 기존 데이터(배열)의 앞에 추가 (새로운 배열)
    // setTodo([newItem, ...todo]);
    // id 1증가
    idRef.current += 1;
  };

  const onUpdate = useCallback((targetId) => {
    dispatch({ type: "UPDATE", targetId });
    // todo state변수 변경하는 세터함수
    // setTodo(
    //   // 모든 요소 반복 -> 결과값은 사용자가 클릭한 객체의 isDone반 변경된 배열
    //   todo.map((it) => {
    //     // 콜백함수는 모든 요소마다 실행, 매개변수 it는 하나의 할일 객체
    //     if (it.id === targetId) {
    //       // 배열의 id와 targetId하고 같으면 (사용자가 체크한 id)
    //       return {
    //         ...it,
    //         isDone: !it.isDone, // 반대값으로 변경(true -> false, false -> true)
    //       };
    //     } else {
    //       // 클릭하지않은 다른 객체
    //       return it;
    //     }
    //   }),
    // );
  }, []);
  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
    // setTodo(todo.filter((it) => it.id !== targetId));
  }, []);
  return (
    <>
      <div className="App">
        <TestComp />
        <Header />
        <TodoEditor onCreate={onCreate} />
        <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
      </div>
    </>
  );
}

export default App;
