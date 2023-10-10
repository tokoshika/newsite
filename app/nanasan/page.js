import "../photo.css";
import Image from "next/image";
import Iframe from "react-iframe";

const Nanasan = () => {
  return (
    <>
      <div className="mainContainer">
        <h2>侵華日軍第731部隊罪証陳列館</h2>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25066.1405317805!2d126.62839945493074!3d45
          .60211886320747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e447086d5537539%3A0xc7a5225f79b546e7!2z5L616I
          -v5pel6LuN56ys5LiD5LiJ5LiA6YOo6ZqK572q6Ki86Zmz5YiX6aSo!5e0!3m2!1sja!2sjp!4v1696912585156!5m2!1sja!2sjp"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="700"
          height="450"
          margin-bottom="1rem"
          // alt="google_map"
          alt="猫は最高に可愛い"
        />
        <p>モニュメント</p>
        <Image src="/assets/nana02.jpg" width={700} height={450} />
        <p>入口の様子（模型）</p>
        <Image src="/assets/nana01.jpg" width={700} height={450} />
        <p>実験の道具</p>
        <Image src="/assets/nana03.jpg" width={700} height={450} />
        <p>人を縛り付ける道具</p>
        <Image src="/assets/nana04.jpg" width={700} height={450} />
      </div>
      <br />
    </>
  );
};

export default Nanasan;
