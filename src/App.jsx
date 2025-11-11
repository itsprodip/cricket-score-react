import React from "react";
import Batter from "./components/Batter";
import Bowler from "./components/Bowler";
const App = () => {
  return (
    <div className="w-11/12 mx-auto my-[30px] space-y-5">
      <h1 className="font-bold text-3xl text-center py-3">
        A simple cricket score board
      </h1>
      <span className="border-b-3 text-green-500 font-bold">Live</span>
      <Batter></Batter>
      <Bowler></Bowler>
     
    </div>
  )
};

export default App;
