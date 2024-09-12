import { useState, useCallback, useEffect, useRef } from "react";
import React from "react";
import "../src/App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordRef = useRef(null);

  function handleRange(event) {
    setLength(event.target.value);
  }

  function handleNumberChange() {
    setNumAllowed((prev) => !prev);
  }

  function handleCharChange() {
    setCharAllowed((prev) => !prev);
  }

  let generatePassword = useCallback(() => {
    let pass = "";
    let alphabetString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) alphabetString += "0123456789";
    if (charAllowed) alphabetString += `!#$%&()*+`;

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * alphabetString.length);
      pass += alphabetString.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numAllowed, charAllowed, generatePassword]);

  const copyPassToClipboard = () => {
    navigator.clipboard.writeText(password);
    PasswordRef.current.select();
  };

  return (
    <div className="main">
      <h1>Password Generator</h1>
      <div className="password">
        <input
          value={password}
          type="text"
          placeholder="password"
          readOnly
          ref={PasswordRef}
        />
        <button onClick={copyPassToClipboard} className="copy-btn">
          Copy
        </button>
      </div>
      <div className="flex justify-between item-center">
        <div className="range flex item-center">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={handleRange}
          />
          <label htmlFor="length">Label: {length}</label>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={handleNumberChange}
          />
          <label htmlFor="numbers">Numbers</label>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={handleCharChange}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
