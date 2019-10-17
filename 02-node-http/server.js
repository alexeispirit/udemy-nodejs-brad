const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo Two" },
  { id: 3, text: "Todo Three" }
];

const server = http.createServer((req, res) => {
  // const { headers, url, method } = req;
  // console.log(headers, url, method);
  // res.setHeader("Content-Type", "text/html");

  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");

  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js"
  });

  // res.write("<h1>Hello</h1>");
  // res.end();
  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server is on ${PORT}`));
