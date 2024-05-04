export default function Content({ classOf, art, nameOf, date, tech, local }) {
  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-start gap-4 py-4">
      <div>
        <img className={classOf} src={art} alt="" />
      </div>
      <div className="text-center flex flex-col items-center gap-2">
        <p className="text-3xl text-cod-gray-200">{nameOf}</p>
        <p className="text-2xl text-cod-gray-300">{date}</p>
        <p className="text-xl text-cod-gray-300">{tech}</p>
        <p className="text-xl text-cod-gray-400">{local}</p>
      </div>
    </div>
  );
}
