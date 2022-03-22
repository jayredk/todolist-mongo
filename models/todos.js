const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const todosSchema = Schema({
  title: {
    type: String,
    required: [true, '你沒有輸入待辦事項']
  }
}, { versionKey: false })

const Todo = model('Todo', todosSchema);

module.exports = Todo;
