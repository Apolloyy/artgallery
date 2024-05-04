import Pearl from "../assets/janvermeer.jpg";
import Content from "../components/content";

export default function Girl() {
  return (
    <Content
      classOf={
        "cursor-pointer w-96 hover:opacity-80 border border-cod-gray-800"
      }
      art={Pearl}
      nameOf={'"A girl with a pearl earring" by Johannes Vermeer'}
      date={"1665"}
      tech={"Óleo sobre tela"}
      local={"Rijksmuseum (Amsterdã, Holanda)"}
    />
  );
}
