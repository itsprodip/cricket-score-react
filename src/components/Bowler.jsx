export default function Bowler() {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Bowling Section</h1>

      <section className="flex items-center gap-3">
        <span className="font-medium">Hitting:</span>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer">
          W
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
          1
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
          2
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
          4
        </button>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition cursor-pointer">
          6
        </button>
      </section>
    </div>
  );
}
