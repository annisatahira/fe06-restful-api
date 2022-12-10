const cors = require("cors");
const jsonServer = require("json-server");
const server = jsonServer.create();
const quoteDB = require("./quote.json");
const router = jsonServer.router(quoteDB);
const port = 3001;

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running on port: " + port);
});
