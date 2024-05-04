import Caspar from "../assets/caspardavidfriedrich.jpg";
import Content from "../components/content";

export default function NascerDaLua() {
  return (
    <div className="w-screen flex items-center justify-center">
      <Content
        classOf={
          "cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"
        }
        art={Caspar}
        nameOf={'"Mondaufgang am Meer" by Caspar David Friedrich'}
        date={"1822"}
        tech={"Óleo sobre tela"}
        local={"Berliner Nationalgalerie (Berlim, Alemanha)"}
      />
    </div>
  );
}
