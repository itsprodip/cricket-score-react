import { use, useState } from "react";
import Bowler from "./Bowler";
export default function Batter() {
  //Overall
  const [runs, setRuns] = useState(0);
  const [balls, setBalls] = useState(0);

  //playerA
  const [foursA,setFoursA]=useState(0);
  const [sixesA,setSixessA]=useState(0);
  const handleASingles = () => {
    setRuns(runs + 1);
    setBalls(balls + 1);
 
  };
  const handleADoubles=()=>{
    setRuns(runs+2);
    setBalls(balls+1);

  }
  const handleAFours=()=>{
    setRuns(runs+4);
    setBalls(balls+1);
    setFoursA(foursA+1);

  }
  const handleASixes=()=>{
    setRuns(runs+6);
    setBalls(balls+1);
    setSixessA(sixesA+1);
    
  }

  return (
    <div>
      <section className="py-3 space-x-2">
        <span className="font-bold text-2xl">Ind</span>
        <span className="font-bold text-2xl">{runs}</span>
        <span className="font-bold text-2xl">-</span>
        <span className="font-bold text-2xl">0</span>
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
            Abhishek Sharma <span className="playerA">*</span>
          </div>

          <div className="grid grid-cols-5 w-42 text-right">
            <h4>{runs}</h4>
            <h4>
              {parseInt(balls / 6)}.{balls % 6}
            </h4>
            <h4>{foursA}</h4>
            <h4>{sixesA}</h4>
            <h4 className=" pl-5">
              {balls == 0 ? 0 : ((runs / balls) * 100).toFixed(2)}
            </h4>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="text-[#1866db] font-semibold">
            Subhman Gill <span className="playerB hidden">*</span>
          </div>
          <div className="grid grid-cols-5 w-42 text-right">
            <h4>0</h4>
            <h4>0</h4>
            <h4>0</h4>
            <h4>0</h4>
            <h4>0.00</h4>
          </div>
        </div>
      </div>

      <section className="flex items-center gap-3">
        <span className="font-medium">Hitting:</span>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer">
          W
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
    </div>
  );
}
