import axios from 'axios';

const baseUrl = 'http://localhost:5001';

export const getTodos = () => {
  return axios.get(baseUrl);
};

export const addTodo = (text) => {
  return axios.post(`${baseUrl}/save`, { text });
};

export const updateTodo = (id, text) => {
  return axios.post(`${baseUrl}/update`, {
    _id: id,
    text,
  });
};

export const deleteTodo = (id) => {
  return axios.post(`${baseUrl}/delete`, {
    _id: id,
  });
};
