import styles from "../components/Item.module.css";

function Item({ foodItem, handleClick }) {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button onClick={handleClick} className={`${styles.button} btn btn-info`}>
        Order
      </button>
    </li>
  );
}

export default Item;
