import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFood = e.target.value;
      e.target.value = "";
      let newArr = [...foodItems, newFood];
      setFoodItems(newArr);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy food</h1>
        <FoodInput handleKeyDown={handleKeyDown} />
        <FoodItems foodItems={foodItems} />
        <ErrorMessage foodItems={foodItems} />
      </Container>
      {/* <Container>
        <p>Above are the food items that are healthy</p>
      </Container> */}
    </>
  );
}

export default App;
