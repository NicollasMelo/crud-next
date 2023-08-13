import Image from "next/image";
import github from "../../../public/github.svg";
import linkedin from "../../../public/linkedin.svg";
import ScrollUp from "../functions/ScrollUp";

export default function Footer() {
  const getNewDate = new Date();
  const day = getNewDate.getDate();
  const mouth = getNewDate.getMonth() + 1;
  const year = getNewDate.getFullYear();

  const date = `${day}/${mouth}/${year}`;

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="text-center mb-4">
          <p>Criado por Nicollas Melo</p>
          <p>Data: {date} </p>
        </div>
        <div className="space-x-9 flex">
          <a
            href="https://www.linkedin.com/in/nicollas-melo-a314a2230/"
            className="text-white hover:text-gray-400"
            target="_blank"
          >
            <Image src={linkedin} alt={"icone-github"} />
          </a>
          <a
            href="https://github.com/NicollasMelo"
            className="text-white hover:text-gray-400"
            target="_blank"
          >
            <Image src={github} alt={"icone-github"} />
          </a>
        </div>
        <ScrollUp />
      </div>
    </footer>
  );
}
