const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from your Node.js App running in Docker!");
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
