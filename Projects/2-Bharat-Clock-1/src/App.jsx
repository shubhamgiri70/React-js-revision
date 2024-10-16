import ClockHeading from "./components/ClockHeading";
import ClockMoto from "./components/ClockMoto";
import Clock from "./components/Clock";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <ClockHeading />
        <ClockMoto />
        <Clock />
      </div>
    </>
  );
}

export default App;
