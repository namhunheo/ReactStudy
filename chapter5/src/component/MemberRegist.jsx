import { useState } from "react";

function MemberRegist() {
  // state 선언
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  // 각 요소가 값이 변경되면 실행되는 이벤트 핸들러
  const handleOnChange = (e) => {
    console.log("현재 수정 대상:", e.target.name);
    console.log("수정값:", e.target.value);
    // 세터함수 실행
    setState({
      ...state, // 기존값을 그대로 대입(전개연산)
      [e.target.name]: e.target.value, // 이벤트가 발생한 name-> 속성명, value->속성값 변경
    });
  };
  return (
    <>
      <div>
        <div>
          <input
            name="name"
            value={state.name}
            onChange={handleOnChange}
            placeholder="이름"
          />
        </div>
        <div>
          <select name="gender" value={state.gender} onChange={handleOnChange}>
            <option key={""}></option>
            <option key={"남성"}>남성</option>
            <option key={"여성"}>여성</option>
          </select>
        </div>
        <div>
          <input
            name="birth"
            type="date"
            vlaue={state.birth}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <textarea name="bio" value={state.bio} onChange={handleOnChange} />
        </div>
      </div>
    </>
  );
}

export default MemberRegist;
