"use client";
import "../style.css";
import Button from "../components/Button/Button.js";
import Header from "../components/Header";

import Friend1 from "../components/Friend/Friend1.js";
import Friend2 from "../components/Friend/Friend2.js";
import Friend3 from "../components/Friend/Friend3.js";
import Friend4 from "../components/Friend/Friend4.js";
import Friend5 from "../components/Friend/Friend5.js";
import Friend6 from "../components/Friend/Friend6.js";
import Friend7 from "../components/Friend/Friend7.js";
import Friend8 from "../components/Friend/Friend8.js";
const Friend = () => {
  return (
    <>
      <Header />
      <div className="friend-button-container">
        <Button props="中国人女子（20学生）" color="green" name={<Friend1 />} />
        <Button
          props="中国人男子（18家電販売）"
          color="green"
          name={<Friend2 />}
        />
        <Button
          props="韓国人女子（18才家事手伝い）"
          color="green"
          name={<Friend3 />}
        />
        <Button props="韓国人男子（23学生）" color="green" name={<Friend4 />} />
        <Button props="北朝鮮夫婦（謎）" color="green" name={<Friend5 />} />
        <Button props="台湾男子（16学生）" color="green" name={<Friend6 />} />
        <Button props="台湾男子（16農家）" color="green" name={<Friend7 />} />
        <Button props="ロシア男子（19学生）" color="green" name={<Friend8 />} />
      </div>
    </>
  );
};

export default Friend;
