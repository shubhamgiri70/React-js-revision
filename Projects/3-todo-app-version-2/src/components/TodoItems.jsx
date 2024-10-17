import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((todo) => (
        <TodoItem key={todo.name} todoName={todo.name} todoDate={todo.Date} />
      ))}
    </>
  );
};

export default TodoItems;
