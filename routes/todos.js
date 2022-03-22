const { getTodos, newTodo, updateTodo, deleteTodo, deleteAllTodo } = require('../controllers/todos');
const { errorHandle } = require('../base/response');

const todoRouter = async (req, res) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  })

  if (req.url === '/todos' && req.method === 'GET') {
    getTodos(res, req.method);
  } else if (req.url === '/todos' && req.method === 'POST') {
    req.on('end', () => {
      newTodo(res, req.method, body);
    })
  } else if (req.url.startsWith('/todos/') && req.method === 'PATCH') {
    req.on('end', () => {
      const id = req.url.split('/').pop();
      updateTodo(res, req.method, body, id);
    })
  } else if (req.url === '/todos' && req.method === 'DELETE') {
    deleteAllTodo(res, req.method);
  } else if (req.url.startsWith('/todos/') && req.method === 'DELETE') {
    const id = req.url.split('/').pop();
    deleteTodo(res, req.method, id)
  } else if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
  } else {
    errorHandle(res, 404);
  }
}

module.exports = todoRouter;
