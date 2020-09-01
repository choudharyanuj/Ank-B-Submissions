import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter } from "./action.js";




const store = createStore(counter);
console.log("this is an object", incrementCounter(1));

console.log(store.getState()); 


function App() {
  return (
    <div className="App">
      Count : {store.getState().count}
      <br />
      <button onClick={() => store.dispatch(incrementCounter(1))}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => store.dispatch(decrementCounter(1))}>
        Decrement by 1
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
