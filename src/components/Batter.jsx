import { use, useState } from "react";
import Bowler from "./Bowler";
export default function Batter() {
  //Overall
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [recentHit, setRecentHit] = useState("");
  const [runScore,setRunScore]=useState("");
  //playerA
  const [foursA, setFoursA] = useState(0);
  const [sixesA, setSixessA] = useState(0);

  const handleWickets = () => {
    setWickets(wickets + 1);
    setBalls(balls + 1);
    setRecentHit(recentHit + "W ");
  };
  const handleDots = () => {
    setBalls(balls + 1);
    setRecentHit(recentHit + "0 ");
    setRunScore("Josh Hazlewood to Abhishek Sharma no run");

  };
  const handleASingles = () => {
    setRuns(runs + 1);
    setBalls(balls + 1);
    setRecentHit(recentHit + "1 ");
  };
  const handleADoubles = () => {
    setRuns(runs + 2);
    setBalls(balls + 1);
    setRecentHit(recentHit + "2 ");
  };
  const handleAFours = () => {
    setRuns(runs + 4);
    setBalls(balls + 1);
    setFoursA(foursA + 1);
    setRecentHit(recentHit + "4 ");
  };
  const handleASixes = () => {
    setRuns(runs + 6);
    setBalls(balls + 1);
    setSixessA(sixesA + 1);
    setRecentHit(recentHit + "6 ");
  };

  return (
    <div>
      <section className="py-3 space-x-2">
        <span className="font-bold text-2xl">Ind</span>
        <span className="font-bold text-2xl">{runs}</span>
        <span className="font-bold text-2xl">-</span>
        <span className="font-bold text-2xl">{wickets}</span>
        <span className="font-bold text-sm">
          ({parseInt(balls / 6)}.{balls % 6})
        </span>
      </section>
      <div className="p-2 bg-gray-200 my-3 rounded-md flex justify-between">
        <div>Batter</div>
        <div className="grid grid-cols-5 w-42 text-right">
          <h4>R</h4>
          <h4>B</h4>
          <h4>4s</h4>
          <h4>6s</h4>
          <h4>SR</h4>
        </div>
      </div>
      <div className="p-1 space-y-2">
        <div className="flex justify-between items-center">
          <div className="text-[#1866db] font-semibold">
            {" "}
            <a
              href="https://www.cricbuzz.com/profiles/12086/abhishek-sharma"
              target="_blank"
            >
              Abhishek Sharma
            </a>
            <span className="playerA">*</span>
          </div>

          <div className="grid grid-cols-5 w-42 text-right">
            <h4>{runs}</h4>
            <h4>
              {parseInt(balls / 6)}.{balls % 6}
            </h4>
            <h4>{foursA}</h4>
            <h4>{sixesA}</h4>
            <h4 className=" ml-2">
              {balls == 0 ? 0 : ((runs / balls) * 100).toFixed(2)}
            </h4>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-[#1866db] font-semibold">
            {" "}
            <a
              href="https://www.cricbuzz.com/profiles/11808/shubman-gill"
              target="_blank"
            >
              Subhman Gill
            </a>
            <span className="playerB hidden">*</span>
          </div>
          <div className="grid grid-cols-5 w-42 text-right">
            <h4>0</h4>
            <h4>0</h4>
            <h4>0</h4>
            <h4>0</h4>
            <h4>0</h4>
          </div>
        </div>
      </div>
      <section className="flex items-center gap-3">
        <span className="font-medium">Hitting:</span>
        <button
          onClick={handleWickets}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          W
        </button>
        <button
          onClick={handleDots}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          Dot
        </button>
        <button
          onClick={handleASingles}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          1
        </button>
        <button
          onClick={handleADoubles}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          2
        </button>
        <button
          onClick={handleAFours}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          4
        </button>
        <button
          onClick={handleASixes}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer"
        >
          6
        </button>
      </section>
      {/* Bowling sections */}
      <div className="">
        <div className="p-2 bg-gray-200 my-3 rounded-md flex justify-between">
          <div>Bowler</div>
          <div className="grid grid-cols-5 w-42 text-right">
            <h4>O</h4>
            <h4>M</h4>
            <h4>R</h4>
            <h4>W</h4>
            <h4>ECO</h4>
          </div>
        </div>
        <div className="p-1 space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-[#1866db] font-semibold">
              <a
                href="https://www.cricbuzz.com/profiles/6258/josh-hazlewood"
                target="_blank"
              >
                Josh Hazlewood
              </a>
              <span className="playerA"></span>
            </div>

            <div className="grid grid-cols-5 w-42 text-right">
              <h4>
                {parseInt(balls / 6)}.{balls % 6}
              </h4>
              <h4>0</h4>
              <h4>{runs}</h4>
              <h4>{wickets}</h4>
              <h4 className="ml-1">
                {balls == 0 ? 0 : (runs / (balls / 6)).toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      </div>
      {/* Recent history */}
      <section>
        <span className="text-gray-500">Recent : {recentHit}</span>
      </section>
      {/* Live scoreboard section */}
      <section>
        <h1 className="border-b border-gray-400 my-2"></h1>
        <div className="flex gap-5">
          <div>
            <h4>
              {parseInt(balls / 6)}.{balls % 6}
            </h4>
          </div>
          <div>{runScore}</div>
        </div>
      </section>
    </div>
  );
}
