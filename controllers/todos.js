const Todo = require('../models/todos');
const { successHandle, errorHandle } = require('../base/response');

class TodoController {
  async getTodos(res, method) {
    const data = await Todo.find({});
    successHandle(res, data, method);
  }
  async newTodo(res, method, body) {
    try {
      const title = JSON.parse(body).title;
      if (title !== undefined) {
        const data = await Todo.create({
          title
        })
        successHandle(res, data, method);
      } else {
        errorHandle(res, 400);
      }
    } catch (error) {
      errorHandle(res, 400);
    }
  }
  async updateTodo(res, method, body, id){
    try {
      const title = JSON.parse(body).title;
      if (title !== undefined) {
        const data = await Todo.findByIdAndUpdate(id, {
          title
        })
        successHandle(res, data, method);
      } else {
        errorHandle(res, 400);
      }
    } catch (error) {
      errorHandle(res, 400);
    }
  }
  async deleteAllTodo(res, method) {
    const data = await Todo.deleteMany({});
    successHandle(res, data, method);
  }
  async deleteTodo(res, method, id) {
    try {
      const data = await Todo.findByIdAndDelete(id)
      successHandle(res, data, method);
    } catch (error) {
      errorHandle(res, 400);
    }
  }
}

module.exports = new TodoController();
