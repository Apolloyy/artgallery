import Parasol from "../assets/claudemonet.jpg";
import Content from "../components/content";

export default function ClaudeParasol() {
  return (
    <Content
      classOf={"cursor-pointer w-96 hover:opacity-80"}
      art={Parasol}
      nameOf={'"Woman with a Parasol" by Claude Monet'}
      date={"1875"}
      tech={"Óleo sobre tela"}
      local={"National Gallery of Art (Washington, EUA)"}
    />
  );
}
