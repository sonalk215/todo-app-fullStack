const express = require('express');
const {
  getToDo,
  saveToDo,
  updateTodo,
  deleteTodo,
} = require('../controllers/ToDoControllers');

const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.status(201).json({
//     message: 'Hi TODO Express!',
//   });
// });

router.get('/', getToDo);
router.post('/save', saveToDo);
router.post('/update', updateTodo);
router.post('/delete', deleteTodo);

module.exports = router;
