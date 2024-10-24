import styles from "./FoodInput.module.css";

const FoodInput = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item Here"
      className={styles.foodInput}
      onKeyDown={props.handleKeyDown}
    />
  );
};

export default FoodInput;
