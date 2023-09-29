import "./allfact.css";

const Fact3 = () => {
  return (
    <>
      <p>
        日本政府としては、日本軍の南京入城（1937年）後、
        非戦闘員の殺害や略奪行為等があったことは否定できないと考えています。
        しかしながら、被害者の具体的な人数については諸説あり、政府としてどれが正しい数かを認定することは困難であると考えています。
      </p>
      <div className="website"> (日本国外務省ホームページより抜粋)</div>
      <p>
        中国政府の公式見解では<span>約30万人</span>
        とされている。日本国内では、日本政府の見解は間違いであり
        <a href="/photo">南京大虐殺</a>はウソだという意見もある。
      </p>
      <div className="website"></div>
    </>
  );
};

export default Fact3;
