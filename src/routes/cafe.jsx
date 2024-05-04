import Gogh from "../assets/vangogh.jpg";
import Content from "../components/content";

export default function Cafe() {
  return (
    <div className="w-screen flex items-center justify-center">
      <Content
        classOf={
          "cursor-pointer md:w-[700px] w-96 hover:opacity-80 px-4 md:px-0"
        }
        art={Gogh}
        nameOf={'"The night cafe" by Vincent Van Gogh'}
        date={"1888"}
        tech={"Óleo sobre tela"}
        local={"Yale University Art Gallery (New Haven, Eua)"}
      />
    </div>
  );
}
