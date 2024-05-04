import Henry from "../assets/henrymoret.jpg";
import Content from "../components/content";

export default function CalmWeather() {
  return (
    <Content
      classOf={"cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"}
      art={Henry}
      nameOf={
        '"Calm weather, Coast at the Pointe de Pern, Ushant" by Henry Moret'
      }
      date={"1894"}
      tech={"Óleo sobre tela"}
      local={"Local indefinido"}
    />
  );
}
