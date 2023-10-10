import { useState } from "react";
import "./Button.css";

const Button2 = ({ props = "button", color = "black", name }) => {
  const [visible, setVisible] = useState(false);
  const btnClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <button
        className={visible ? `button ${color}` : `button darkslategray2`}
        onClick={btnClick}
      >
        {props}
      </button>
      <div>{visible ? name : ""}</div>
    </>
  );
};

export default Button2;
