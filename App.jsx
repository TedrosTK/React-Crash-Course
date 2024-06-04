import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modall.jsx';

function App() {
  return (
    <div className="todo_wrapper">
      <Title />
      <div className="todo_wrapper">
        <Todo 
        title= "Finish FES"
        paragraph= "code along with FES step by step"
        />
        <Todo 
        title="Finish Interview Section"
        paragraph="Finish every interview question in the next 6 weeks."
        />
        <Todo title="Land a $100k Job"
        paragraph="Apply to 100 jobs"/>
      </div>
      <Modal title="Do you want to proceed?"/>
    </div>
  );
}

export default App;
