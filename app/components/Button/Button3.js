import { useState } from "react";
import "./Button.css";

const Button2 = ({ props = "button", color = "black", name = "" }) => {
  const [visible, setVisible] = useState(false);
  const btnClick = () => {
    setVisible(!visible);
    console.log(visible);
  };
  return (
    <>
      <button
        className={visible ? `button ${color}` : `button red`}
        onClick={btnClick}
      >
        {visible ? props : name}
      </button>
    </>
  );
};

export default Button2;
