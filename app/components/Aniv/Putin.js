import Image from "next/image";
export default function Putin() {
  return (
    <>
      <Image
        className="russia-putin"
        src="/assets/putin.png"
        width={150}
        height={150}
        priority={false}
        alt="記念碑"
      />
      <h3>
        日本は欧米とともに前例のない、<span>非友好的</span>
        なキャンペーンを開始した
      </h3>
      <h3>ゆるせん！怒ったぞ！！こうなったら、お前らも敵国だ！</h3>
      <h3>
        9月3日を<span>帝国主義日本に対する勝利の日</span>に変更じゃ！
      </h3>
      <br />
    </>
  );
}
