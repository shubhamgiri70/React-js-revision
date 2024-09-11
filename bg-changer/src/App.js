import { useState } from "react";
import "../src/App.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="bg-color" style={{ backgroundColor: color }}>
      <div className="buttons">
        <button
          onClick={() => setColor("red")}
          className="bg-red-600 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Green
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Orange
        </button>
        <button
          onClick={() => setColor("gray")}
          className="bg-gray-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Gray
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Pink
        </button>
        <button
          onClick={() => setColor("purple")}
          className="bg-purple-500 text-white p-2 m-2 w-20 rounded-lg cursor-pointer"
        >
          Purple
        </button>
      </div>
    </div>
  );
}

export default App;
