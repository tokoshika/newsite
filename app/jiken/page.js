"use client";
import "../photo.css";
import Image from "next/image";
import { useState } from "react";

const Jiken = () => {
  const [open, setOpen] = useState(false);
  const openMemo = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="mainContainer">
        <h2>侵華日軍南京大屠殺遇難同胞紀念館</h2>
        <p className="jiken">
          侵華日軍南京大屠殺遇難同胞紀念館は、中華人民共和国の博物館であり、追悼施設でもある。
          日本のマスメディアからは南京大虐殺紀念館とも呼ばれる。
        </p>
        <p>
          <span>記念碑</span>（犠牲者30万人）
        </p>
        <Image
          src="/assets/dai4.jpg"
          width={700}
          height={450}
          priority={false}
          alt="記念碑"
        />
        <p onClick={openMemo}>
          <span>万人坑</span>
        </p>
        {open ? (
          <p className="explanation jiken">
            日本軍の満洲･中国本土への進出時、満洲を中心とする中国各地に存在した
            日本人経営の鉱山や工事現場等で多数の中国人労働者の遺骸が捨てられ、
            ときには使い物にならなくなった労務者が生きたまま遺棄あるいは生き埋めにされたり
            日本軍の要塞建設等で完成後に口封じのために殺された者もいたと伝えられる場所。
            「ヒト捨て場」として表現されることもある。
          </p>
        ) : null}

        <Image
          src="/assets/dai1.jpg"
          width={700}
          height={450}
          priority={false}
          alt="万人坑"
        />
      </div>
    </>
  );
};

export default Jiken;
