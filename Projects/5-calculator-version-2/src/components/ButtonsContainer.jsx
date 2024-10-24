import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = (props) => {
  const buttonsArr = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsArr.map((button) => (
        <button
          onClick={() => props.onButtonClick(button)}
          key={button}
          className={styles.button}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
