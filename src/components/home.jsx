import { Link } from "react-router-dom";
import Caravaggio from "../assets/caravaggio.jpg";
import Caspar from "../assets/caspardavidfriedrich.jpg";
import Claude from "../assets/claudemonet.jpg";
import Henry from "../assets/henrymoret.jpg";
import Jan from "../assets/janvermeer.jpg";
import Paul from "../assets/paulcezanne.jpg";
import Pierre from "../assets/pierreaugusterenoir.jpg";
import Rembrandt from "../assets/rembrandt.jpg";
import VanGogh from "../assets/vangogh.jpg";

export default function Home() {
  return (
    <div className="w-full h-min flex gap-8 lg:justify-center flex-wrap px-8 lg:px-0 py-8">
      <span className="bg-clip-text text-cod-gray-800/20 transition-all bg-gradient-to-r from-cod-gray-100/80 to-cod-gray-50/90 font-hepta lg:text-4xl text-3xl lg:w-32 w-28 ">
        The <b>art</b> gallery.
      </span>

      <div className="flex flex-col gap-4">
        <div className="flex lg:flex-row items-center gap-4">
          <Link to={"/baco"}>
            <img
              src={Caravaggio}
              className="md:w-96 md:h-[488px] w-72 h-[200px] border border-cod-gray-900 relative"
            />
            <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-8 lg:w-96 lg:h-[488px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40  lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
              {'"Baco" by Caravaggio'}
            </p>
          </Link>
          <div className="flex flex-col items-start gap-4 justify-center">
            <Link to={"/nascer"}>
              <img
                src={Caspar}
                className="md:w-96 md:h-[236px] w-52 h-[92px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-8 lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"Mondaufgang am Meer" by Caspar David Friedrich'}
              </p>
            </Link>
            <Link to={"/calm"}>
              <img
                src={Henry}
                className="md:w-96 md:h-[236px] w-52 h-[92px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[282px] lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:text-center lg:py-2 lg:transition">
                {
                  '"Calm weather, Coast at the Pointe de Pern, Ushant" by Henry Moret'
                }
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:flex-row flex-row">
          <div className="flex flex-col items-center gap-4">
            <Link to={"/cartes"}>
              <img
                src={Paul}
                className="md:w-96 md:h-[236px] w-52 h-[112px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[536px] lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"Les Joueurs de cartes" by Paul Cezanne'}
              </p>
            </Link>
            <Link to={"/pont"}>
              <img
                src={Pierre}
                className="md:w-96 md:h-[236px] w-52 h-[112px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[788px] lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"Pont Neuf, Paris" by Auguste Renoir'}
              </p>
            </Link>
          </div>
          <div>
            <Link to={"/parasol"}>
              <img
                src={Claude}
                className="md:w-96 md:h-[488px] w-60 h-[240px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[536px] lg:w-96 lg:h-[488px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"Woman with a Parasol" by Claude Monet'}
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4 lg:flex-row">
          <Link to={"/pearl"}>
            <img
              src={Jan}
              className="md:w-96 md:h-[488px] w-60 h-[244px] border border-cod-gray-900 relative"
            />
            <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[1040px] lg:w-96 lg:h-[488px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
              {'"A girl with a pearl earing" by Johannes Vermeer'}
            </p>
          </Link>
          <div className="flex flex-col items-center gap-4">
            <Link to={"/mill"}>
              <img
                src={Rembrandt}
                className="md:w-96 md:h-[236px] w-52 h-[112px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[1040px] lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"The Mill" by Rembrandt'}
              </p>
            </Link>
            <Link to={"/cafe"}>
              <img
                src={VanGogh}
                className="md:w-96 md:h-[236px] w-52 h-[112px] border border-cod-gray-900 relative"
              />
              <p className="hidden lg:cursor-pointer lg:absolute lg:opacity-0 lg:top-[1292px] lg:w-96 lg:h-[236px] lg:flex lg:items-end lg:bg-cod-gray-950 lg:hover:opacity-40 lg:text-cod-gray-50 lg:justify-center lg:py-2 lg:transition">
                {'"The Night Cafe" by Vincent Van Gogh'}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
