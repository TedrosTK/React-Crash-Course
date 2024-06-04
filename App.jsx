import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modall.jsx";
import Counter from "./components/Counter.jsx";
import React, {useState} from "react";

function App() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div className="todo_wrapper">
      <Title />
      <div>
        <Counter/>
      </div>
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add Todo</button>
      </div>
      <div className="todo_wrapper">
        <Todo title="Finish FES" />
        <Todo title="Finish Interview Section" />
        <Todo title="Land a $100k Job" />
      </div>
      {showModal && <Modal title="Confirm Delete?"/>}
    </div>
  );
}

export default App;
