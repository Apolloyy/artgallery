import Caravaggio from "../assets/caravaggio.jpg";
import Content from "../components/content";

export default function Baco() {
  return (
    <Content
      classOf={"cursor-pointer w-96 hover:opacity-80"}
      art={Caravaggio}
      nameOf={'"Baco" by Caravaggio'}
      date={"1596"}
      tech={"Óleo sobre tela"}
      local={"Galeria Uffizi (Florença, Itália)"}
    />
  );
}
