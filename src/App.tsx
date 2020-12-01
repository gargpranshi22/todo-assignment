import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppTodo from './AppTodo'

// interface TodoList{
//   todoList: Array<String>
// }
function App() {
  const [itemName, setItemName] = useState("");
  const [todoList, setTodoList] = useState<Array<String>>(Array);
  const inputRef = useRef();
  function handleDelete(itemName:String) {
    setTodoList(todoList.filter(item => item!=itemName))
  }
  return (
    <div className="todo-app">
      <h3>My Todos</h3>
      <div className="add-item">
        <input id ="item-tb" type="text" onChange={(e) => setItemName(e.target.value)}/>
        <button onClick={(e) => {setTodoList([itemName,...todoList])}}>+</button>
      </div>
      {/* <AppTodo todoList={todoList}/> */}
      {todoList.map(item => (<AppTodo item={item} handleDelete={handleDelete}/>))}
    </div>
  );
}



export default App;