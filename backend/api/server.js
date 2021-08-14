const express = require("express");
const bodyParse = require("body-parser");

const server = express();
const router = require("./routers/router");

server.use(bodyParse.json());
server.use(bodyParse.urlencoded());

const routeV1 = express.Router();
router(server, routeV1);


const port = 5000;

server.listen(port, () => {
  console.log("Api rodando:  https://localhost:" + port);
});
