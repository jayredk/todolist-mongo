const http = require('http');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const todoRouter = require('./routes/todos')
const server = http.createServer(todoRouter)

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
)

mongoose.connect(DB)
  .then(() => console.log('Connected to DB!'))
  .catch(() => console.log('DB connection failed'))

server.listen(process.env.PORT || '8080');