import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Radio from "./components/Radio/Radio";

function App() {
  const [gender, setGender] = useState([
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ]);
  const [selectedRadio, setRadio] = useState("");

  const handleOnChange = (selected) => {
    setRadio(selected);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Radio onChange={handleOnChange} options={gender} value={selectedRadio} />
    </div>
  );
}

export default App;
