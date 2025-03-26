const ToDoModel = require('../models/ToDoModel');

exports.getToDo = async (req, res, next) => {
  const todos = await ToDoModel.find();
  return res.status(200).json({ todos: todos });
};

exports.saveToDo = async (req, res, next) => {
  const { text } = req.body;

  ToDoModel.create({ text }).then((data) => {
    // console.log('todo saved', data);
    return res.status(200).json({ data: data });
  });
};

exports.updateTodo = async (req, res, next) => {
  console.log('update-------------');
  console.log(req.body);
  const { _id, text } = req.body;

  ToDoModel.findByIdAndUpdate(_id, {
    text,
  })
    .then(() => {
      console.log('updated successfully');
      res.status(201).json({
        message: 'updated successfully',
      });
    })
    .catch((err) => console.log('update error'));
};

exports.deleteTodo = async (req, res, next) => {
  console.log('delete-------------');
  console.log(req.body);
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      console.log('deleted successfully');
      res.status(201).json({
        message: 'deleted successfully',
      });
    })
    .catch((err) => console.log('delete error'));
};
