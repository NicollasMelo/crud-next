import Image from "next/image";
import up from "../../public/up.svg";

export default function ScrollUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex w-[100%] justify-end">
      <a href="#" onClick={scrollToTop}>
        <Image src={up} alt={"icone-github"} />
      </a>
    </div>
  );
}
