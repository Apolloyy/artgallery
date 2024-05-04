import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Baco from "./baco";
import Cafe from "./cafe";
import CalmWeather from "./calmweather";
import LesCartes from "./cartes";
import Mill from "./mill";
import NascerDaLua from "./nascerdalua";
import ClaudeParasol from "./parasol";
import Girl from "./pearl";
import PontNeuf from "./pont";

export default function Mainrouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/baco" element={<Baco />}></Route>
        <Route path="/nascer" element={<NascerDaLua />}></Route>
        <Route path="/calm" element={<CalmWeather />}></Route>
        <Route path="/cartes" element={<LesCartes />}></Route>
        <Route path="/pont" element={<PontNeuf />}></Route>
        <Route path="/parasol" element={<ClaudeParasol />}></Route>
        <Route path="/pearl" element={<Girl />}></Route>
        <Route path="/mill" element={<Mill />}></Route>
        <Route path="/cafe" element={<Cafe />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
