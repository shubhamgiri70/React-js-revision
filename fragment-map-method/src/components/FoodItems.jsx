import Item from "./Item";

function FoodItems(props) {
  return (
    <>
      <ul className="list-group">
        {props.foodItems.map((item) => (
          <Item key={item} foodItem={item} />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
