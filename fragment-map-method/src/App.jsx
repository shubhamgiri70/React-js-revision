function App() {
  let foodItems = ["banana", "Milk", "dal", "roti", "bread", "Rice"];
  return (
    <>
      <center>
        <h1>Healthy food</h1>
        <ul className="list-group">
          {foodItems.map((item) => (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </center>
    </>
  );
}

export default App;
