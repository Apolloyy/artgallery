import Rembrandt from "../assets/rembrandt.jpg";
import Content from "../components/content";

export default function Mill() {
  return (
    <div className="w-screen flex items-center justify-center">
      <Content
        classOf={
          "cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"
        }
        art={Rembrandt}
        nameOf={'"The mill" by Rembrandt'}
        date={"1645 - 1648"}
        tech={"Óleo sobre tela"}
        local={"National Gallery of Art (Washington, EUA)"}
      />
    </div>
  );
}
