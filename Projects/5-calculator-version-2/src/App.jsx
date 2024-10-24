import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalValue("");
    } else if (buttonText === "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newValue = calValue + buttonText;
      setCalValue(newValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display calValue={calValue} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
