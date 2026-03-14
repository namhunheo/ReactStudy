import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header";
import Refex from "./component/Refex";
import Footer from "./component/Footer";

// 일반함수
/*
function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}
  */
// const Header = () => {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// };
function ChildComp() {
  return <div>child component</div>;
}
function App() {
  //const name = "이정환";
  const bodyProps = {
    name: "이정환",
    location: "부천시",
    favorList: ["파스타", "빵", "떡뽁이"],
  };

  return (
    <>
      <div>안녕</div>
      <div>
        <Header></Header>
        <Refex />
        <Footer />
      </div>
    </>
  );
}

export default App;
