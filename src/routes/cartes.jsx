import Cartes from "../assets/paulcezanne.jpg";
import Content from "../components/content";

export default function LesCartes() {
  return (
    <Content
      classOf={"cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"}
      art={Cartes}
      nameOf={'"Les Joueurs de cartes" by Paul Cezanne'}
      date={"1890 - 1895"}
      tech={"Óleo sobre tela"}
      local={"Museu de Orsay (Páris, França)"}
    />
  );
}
