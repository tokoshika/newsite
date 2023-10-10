"use client";

import Image from "next/image";
import { useState } from "react";
import "../style.css";
import Header from "../components/Header";
import Button3 from "../components/Button/Button3";

const Map = () => {
  const [map, setMap] = useState(false);
  const changeMap = () => {
    setMap(!map);
    console.log(map);
  };

  return (
    <>
      <Header />
      <div className="map-container">
        <button className="mapBtn" onClick={changeMap}>
          東アジアの主な国
        </button>

        <div className="country">
          <div className="country-up">
            <Button3 props="日本" color="red" name="？"></Button3>
            <Button3 props="韓国" color="red" name="？"></Button3>
            <Button3 props="北朝鮮" color="red" name="？"></Button3>
            <Button3 props="中国" color="red" name="？"></Button3>
            <Button3 props="モンゴル" color="red" name="？"></Button3>
            <Button3 props="台湾" color="red" name="？"></Button3>
          </div>
        </div>
        {map ? (
          <Image
            src="/assets/asia02.png"
            width={700}
            height={450}
            priority={false}
            alt="記念碑"
          />
        ) : (
          <Image
            src="/assets/asia01.png"
            width={700}
            height={450}
            priority={false}
            alt="記念碑"
          />
        )}
      </div>
    </>
  );
};

export default Map;
