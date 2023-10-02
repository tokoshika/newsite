"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "../style.css";

const Map = () => {
  const [map, setMap] = useState(false);
  const changeMap = () => {
    setMap(!map);
    console.log(map);
  };

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
      <button onClick={changeMap}>Change</button>

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
    </>
  );
};

export default Map;
