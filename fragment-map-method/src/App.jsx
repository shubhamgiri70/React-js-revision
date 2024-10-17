import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["banana", "Milk", "dal", "roti", "bread", "Rice"];

  return (
    <>
      <center>
        <h1 className="food-heading">Healthy food</h1>
        <ErrorMessage foodItems={foodItems} />
        <FoodItems foodItems={foodItems} />
      </center>
    </>
  );
}

export default App;
