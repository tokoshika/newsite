"use client";
import Link from "next/link";
import "../style.css";
import Button from "../components/Button/Button.js";
import Button2 from "../components/Button/Button2.js";
import Header from "../components/Header";

import Fact1 from "./fact1";
import Fact2 from "./fact2";
import Fact3 from "./fact3";
import Fact4 from "./fact4";

const Fact = () => {
  return (
    <>
      <Header />
      <div className="button">
        <h3 style={{ color: "gray", "margin-top": "1rem" }}>日本でおきた事</h3>
        <br></br>
        <Button
          props="ヒロシマ原爆投下"
          color="darkslategray"
          name={<Fact1 />}
        />
        <Button
          props="ナガサキ原爆投下"
          color="darkslategray"
          name={<Fact2 />}
        />
        <hr></hr>
        <h3 style={{ color: "gray", "margin-top": "1rem" }}>中国でおきた事</h3>

        <Button2
          props="南京事件（大虐殺）"
          color="darkslategray"
          name={<Fact3 />}
        />
        <Button2
          props="七三一部隊(哈爾賓)"
          color="darkslategray"
          name={<Fact4 />}
        />
        <hr></hr>

        <h3 style={{ color: "gray", "margin-top": "1rem" }}>韓国でおきた事</h3>
        <Button2 props="日韓併合" color="darkslategray" />
        <Button2 props="徴用工・従軍慰安婦" color="darkslategray" />
        <h3 style={{ color: "gray", "margin-top": "1rem" }}>
          <hr></hr>
          アメリカでおきた事
        </h3>
        <Button2 props="真珠湾攻撃" color="darkslategray" />
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default Fact;
