const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
  'Content-Type': 'application/json',
};
const msg = {
  'GET': '取得待辦事項成功',
  'POST': '新增待辦事項成功',
  'PATCH': '編輯待辦事項成功',
  'DELETE': '刪除待辦事項成功'
};
const errorMsg = {
  '400': '欄位錯誤或 Todo id 不存在',
  '404': '404 NOT FOUND!'
}

class Responser {
  successHandle(res, data, method) {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      status: 'success',
      message: msg[method],
      data
    }))
    res.end();
  }
  errorHandle(res, statusCode) {
    res.writeHead(statusCode, headers);
    res.write(JSON.stringify({
      status: 'success',
      message: errorMsg[statusCode],
    }))
    res.end();
  }
}

module.exports = new Responser;
