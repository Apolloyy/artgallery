import Pont from "../assets/pierreaugusterenoir.jpg";
import Content from "../components/content";

export default function PontNeuf() {
  return (
    <Content
      classOf={"cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"}
      art={Pont}
      nameOf={'"Pont Neuf, Paris" by Auguste Renoir'}
      date={"1872"}
      tech={"Óleo sobre tela"}
      local={"National Gallery of Art (Washington, EUA)"}
    />
  );
}
