import Link from "next/link";
import "../style.css";
export default function header() {
  return (
    <>
      <div className="header">
        <Link href="/" className="no-underline ">
          ホーム
        </Link>
        <Link href="/map" className="no-underline ">
          地図
        </Link>
        <Link href="/anniversary" className="no-underline ">
          記念日
        </Link>
        <Link href="/fact" className="no-underline ">
          出来事
        </Link>
        <Link href="/friend" className="no-underline ">
          友達
        </Link>
      </div>
    </>
  );
}
