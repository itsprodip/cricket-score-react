import Bowler from "./Bowler";
export default function Batter() {
  return (
    <div>
      <div className="p-2 bg-gray-200 my-3 rounded-md flex justify-between">
        <div>Batter</div>
        <div className="flex gap-5">
          <h4>R</h4>
          <h4>B</h4>
          <h4>4s</h4>
          <h4>6s</h4>
          <h4>SR</h4>
        </div>
      </div>
      <div className="p-1 space-y-2">
        <div className="flex justify-between">
          <div className="text-[#1866db] font-semibold">Abhishek Sharma</div>
          <div className="flex gap-5">
            <h4>R</h4>
            <h4>B</h4>
            <h4>4s</h4>
            <h4>6s</h4>
            <h4>SR</h4>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-[#1866db] font-semibold">Subhman Gill</div>
          <div className="flex gap-5">
            <h4>R</h4>
            <h4>B</h4>
            <h4>4s</h4>
            <h4>6s</h4>
            <h4>SR</h4>
          </div>
        </div>
      </div>
 
    </div>
  );
}
