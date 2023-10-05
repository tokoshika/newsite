import "./aniv.css";
import { useState } from "react";
import Putin from "./Putin";
import Kisida from "./Kisida";
const Aniv7 = () => {
  const [kisida, setKisida] = useState(false);
  const clickKisida = () => {
    setKisida(!kisida);
  };

  const [putin, setPutin] = useState(false);
  const clickPutin = () => {
    setPutin(!putin);
  };
  return (
    <>
      <div className="main-container2"></div>
      <div className="kisida-wrap"></div>
      <p className="kisida" onClick={clickKisida}>
        岸田総理
      </p>
      <div>{kisida ? <Kisida /> : null}</div>

      <div>
        <p className="kisida" onClick={clickPutin}>
          プーチン大統領
        </p>
      </div>
      <div>{putin ? <Putin /> : null}</div>
    </>
  );
};
export default Aniv7;
