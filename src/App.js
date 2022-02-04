import logo from "./logo.svg";
import "./App.css";
import { Todos } from "./components/Todos";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Todos/> */}
      {show ? <Counter /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >{show? "Hide":"show"}
       
      </button>
    </div>
  );
}

export default App;
