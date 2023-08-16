import About from "@/template/about/about";
import NavBar from "@/components/navbar/navbar";
import { NAME, PAGE } from "../constants/constants";
import ContentAboutMe from "@/template/content/contentAboutMe";

export default function Home() {
  return (
    <>
      <NavBar name={NAME} page={PAGE} />
      <ContentAboutMe />
      <About />
    </>
  );
}
