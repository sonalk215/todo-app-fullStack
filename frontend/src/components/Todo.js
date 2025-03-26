import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const Todo = ({ item, updateMode, deleteTodoItem, handleUpdateTodo }) => {
  return (
    <div className="todo">
      <div className="text">{item.text}</div>
      <div className="icons">
        <BiEdit
          className="icon"
          onClick={() => handleUpdateTodo(item._id, item.text)}
        ></BiEdit>
        <AiFillDelete
          className="icon"
          onClick={() => deleteTodoItem(item._id)}
        ></AiFillDelete>
      </div>
    </div>
  );
};

export default Todo;
