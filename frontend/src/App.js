import { useState, useEffect } from 'react';
import Todo from './components/Todo';
import { addTodo, getTodos, updateTodo, deleteTodo } from './utils/todoApis';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [updateId, setUpdateId] = useState(null);

  const getTodosList = async () => {
    const todoResponse = await getTodos();
    const todoData = await todoResponse;
    setTodos(todoData.data.todos);
  };

  const handleAddTodo = async () => {
    await addTodo(text);
    setText('');

    getTodosList();
  };

  const updateTodoItem = async () => {
    await updateTodo(updateId, text);
    setText('');
    setUpdateId();
    getTodosList();
  };

  const handleUpdateTodo = async (id, text) => {
    setUpdateId(id);
    setText(text);
  };

  const deleteTodoItem = async (id) => {
    await deleteTodo(id);
    getTodosList();
  };

  useEffect(() => {
    getTodosList();
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add a todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={updateId ? updateTodoItem : handleAddTodo}
          >
            {updateId ? 'Update' : 'Add'}
          </div>
        </div>
        <div className="list">
          {todos &&
            todos.map((item) => (
              <Todo
                handleUpdateTodo={handleUpdateTodo}
                deleteTodoItem={deleteTodoItem}
                item={item}
                key={item._id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
