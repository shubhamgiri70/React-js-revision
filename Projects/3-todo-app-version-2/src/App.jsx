import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todos = [
    { name: "Buy Milk", Date: "01.04.2024" },
    { name: "Go to collage", Date: "01.04.2024" },
  ];

  return (
    <div className="todo-container">
      <Header />
      <AddTodo />
      <TodoItems todoItems={todos} />
    </div>
  );
}

export default App;
