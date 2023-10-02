"use client";
import Link from "next/link";
import "../style.css";
import Button from "../components/Button/Button.js";
import Fact1 from "../fact/fact1";
import Fact2 from "../fact/fact2";
import Fact3 from "../fact/fact3";

import Aniv1 from "../components/Aniv/Aniv1";
import Aniv2 from "../components/Aniv/Aniv2";
import Aniv3 from "../components/Aniv/Aniv3";
import Aniv4 from "../components/Aniv/Aniv4";
import Aniv5 from "../components/Aniv/Aniv5";
import Aniv6 from "../components/Aniv/Aniv6";

const Annive = () => {
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
      <h1 className="title">ここは記念日</h1>
      <div className="button button-anive">
        <div className="left">
          <Button props="日本" color="skyblue" name={<Aniv1 />} />
          <Button props="韓国" color="skyblue" name={<Aniv2 />} />
          <Button props="台湾" color="skyblue" name={<Aniv3 />} />
        </div>
        <div className="right">
          <Button props="アメリカ" color="skyblue" name={<Aniv5 />} />
          <Button props="中国" color="skyblue" name={<Aniv4 />} />
          <Button props="ロシア" color="skyblue" name={<Aniv6 />} />
        </div>
      </div>
    </>
  );
};

export default Annive;
