import React from 'react'
import './AppTodo.css';

interface TodoList {
    item: String;
    handleDelete: (itemName: String) => void;
}
// export default function AppTodo(todoList) {
export const AppTodo: React.FC<TodoList> = ({item, handleDelete}) => {
    return (
        <div className="item-list">
            <span>{item}</span>
            <button id="edit" className="btn">Edit</button>
            <button id="delete" className="btn" onClick={() => handleDelete(item)}>Delete</button>
        </div>
    )
}

export default AppTodo
