const express = require("express");
const bodyParse = require("body-parser");
const router = require("./routers/router");

const server = express();

server.use(bodyParse.json());
server.use(bodyParse.urlencoded());

const routeV1 = express.Router();
router(server, routeV1);


const port = 5000;

server.listen(port, () => {
  console.log("Api rodando:  http://localhost:" + port);
});
