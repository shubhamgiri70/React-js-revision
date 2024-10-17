import styles from "../components/Item.module.css";

function Item(props) {
  return (
    <li className={`${styles["kg-item"]} list-group-item kg-item`}>
      <span className={`${styles["kg-span"]}`}>{props.foodItem}</span>
    </li>
  );
}

export default Item;
