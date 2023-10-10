"use client";
import Header from "./components/Header";
import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="main-title">
        <h1>東アジアから見た太平洋戦争</h1>
        <h2 className="sub-title">それって、あなたの感想でしょ？</h2>
      </div>
    </>
  );
};

export default App;
