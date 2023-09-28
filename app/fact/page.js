"use client";
import Link from "next/link";
import "../style.css";
import Button from "../components/Button/Button.js";
import Button2 from "../components/Button/Button2.js";

import Fact1 from "./fact1";
import Fact2 from "./fact2";
import Fact3 from "./fact3";
import Fact4 from "./fact4";
import Fact5 from "./fact5";
const Fact = () => {
  return (
    <>
      <div className="header">
        <Link href="/" className="no-underline ">
          ホーム
        </Link>
        <Link href="fact" className="no-underline ">
          出来事
        </Link>
        <Link href="anniversary" className="no-underline ">
          記念日
        </Link>
        <Link href="friend" className="no-underline ">
          友達
        </Link>
        <Link href="map" className="no-underline ">
          地図
        </Link>
      </div>
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
        <Button2 props="btn" color="darkslategray" name={<Fact4 />} />
        <Button2 props="btn" color="darkslategray" name={<Fact5 />} />
        <h3 style={{ color: "gray", "margin-top": "1rem" }}>
          <hr></hr>
          アメリカでおきた事
        </h3>
        <Button2 props="btn" color="darkslategray" />
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default Fact;
