import Image from "next/image";
export default function Kisida() {
  return (
    <>
      <Image
        className="russia-putin"
        src="/assets/uk1.jpg"
        width={700}
        height={150}
        priority={false}
        alt="記念碑"
      />
    </>
  );
}
