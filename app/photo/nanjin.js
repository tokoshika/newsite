import Image from "next/image";
import Iframe from "react-iframe";

const Nanjin = () => {
  // const URL =
  //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.245725948612!2d118.74080154058662!3d32.03553962161651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b58b9883bb5141%3A0xac8ad79ca2a68f69!2z5L616I-v5pel6LuN5Y2X5Lqs5aSn5bGg5q666YGt6Zuj5ZCM6IOe57SA5b-16aSo!5e0!3m2!1sja!2sjp!4v1695954776955!5m2!1sja!2sjp";
  return (
    <>
      <div className="mainContaner">
        <h2>現在も残る南京城の城壁</h2>
        <p>全体の様子（模型）</p>
        <Image src="/assets/nan01.jpg" width={500} height={400} />
        <p>城壁</p>
        <Image src="/assets/nan02.jpg" width={500} height={400} />
        <p>城壁</p>
        <Image src="/assets/nan03.jpg" width={500} height={400} />
        <p>城壁</p>
        <Image src="/assets/nan04.jpg" width={500} height={400} />
        <br></br>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.245725948612!2d118.74080154058662!3d32.03553962161651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b58b9883bb5141%3A0xac8ad79ca2a68f69!2z5L616I-v5pel6LuN5Y2X5Lqs5aSn5bGg5q666YGt6Zuj5ZCM6IOe57SA5b-16aSo!5e0!3m2!1sja!2sjp!4v1695954776955!5m2!1sja!2sjp"
          width="600"
          height="450"
          // alt="google_map"
          alt="猫は最高に可愛い"
          // style="border:0;"
          // allowfullscreen=""
          // loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Nanjin;
