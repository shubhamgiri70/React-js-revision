import styles from "./Display.module.css";

const Display = (props) => {
  return (
    <input
      value={props.calValue}
      className={styles.display}
      type="text"
      readOnly
    />
  );
};

export default Display;
