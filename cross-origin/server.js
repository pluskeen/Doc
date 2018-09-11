var http = require("http");
var url = require("url");


/**
 * jsonp
 */
// http.createServer(function (req, res) {
//   const data = {
//     x: 10
//   }
//   const callback = url.parse(req.url, true).query.callback;
//   const param = url.parse(req.url, true).query.req;
//   //console.log(param)
//   res.writeHead(200);
//   res.end(`${callback}(${JSON.stringify(data)})`)
// }).listen(8882, "127.0.0.1");

/**
 * cors
 */
// http.createServer(function (req, res) {
//   const data = {
//     x: 10
//   }
//   //console.log(param)
//   res.writeHead(200,{
//     'Access-Control-Allow-Origin':'http://127.0.0.1:8884'
//   });
//   res.end(`(${JSON.stringify(data)})`)
// }).listen(8882, "127.0.0.1");

/**
 * nginx
 */
http.createServer(function (req, res) {
  const data = {
    x: 10
  }
  res.writeHead(200, {});
  res.end(`(${JSON.stringify(data)})`)
}).listen(8882, "127.0.0.1");