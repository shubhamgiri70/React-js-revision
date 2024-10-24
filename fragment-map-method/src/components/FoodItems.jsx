import Item from "./Item";

function FoodItems(props) {
  return (
    <>
      <ul className="list-group">
        {props.foodItems.map((item) => (
          <Item
            key={item}
            foodItem={item}
            handleClick={() => {
              console.log(`${item} being bought`);
            }}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
