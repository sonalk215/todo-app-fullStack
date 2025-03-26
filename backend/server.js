const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes/ToDoRoute');

const app = express();
const PORT = process.env.port || 5001;

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then((result) => {
    console.log(`connected to MongoDB...`);
    app.listen(PORT, () => {
      console.log(`server listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// app.listen(PORT, () => {
//   console.log(`server listening on ${PORT}`);
// });
