import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handelAddTodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handelItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  const handelDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h2>To Do List </h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li key={index} className={completed ? "done" : ""} onClick={() => handelItemDone(index)}>
                  {text}
                </li>
                <span onClick={() => handelDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter item..." />
        <button className="add" onClick={handelAddTodo}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
