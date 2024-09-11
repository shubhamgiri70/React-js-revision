import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setState] = useState(0);

  const handleClickAdd = () => {
    setState(counter + 1);
  };

  const handleClickRemove = () => {
    setState(counter - 1);
  };

  return (
    <>
      <center>
        <h1>counter app</h1>
        <h1>{counter}</h1>
        <button onClick={handleClickAdd}>Add value</button>{" "}
        <button onClick={handleClickRemove}>Remove value</button>
      </center>
    </>
  );
}

export default App;
