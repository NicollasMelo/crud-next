import About from "@/template/about/about";
import Content from "@/template/content/contentAboutMe";
import NavBar from "@/components/navbar/navbar";
import { NAME, PAGE } from "../constants/constants";

export default function Home() {
  return (
    <>
      <NavBar name={NAME} page={PAGE} />
      <Content />
      <About />
    </>
  );
}
