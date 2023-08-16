import NavBar from "@/components/navbar/navbar";
import Contact from "@/template/contact/contact";
import { NAME, PAGE } from "../../constants/constants";

export default function RouteContact() {
  return (
    <div>
      <NavBar name={NAME} page={PAGE} />
      <Contact />
    </div>
  );
}
