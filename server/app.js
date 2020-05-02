const express = require("express");

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhots:${port}`;

const server = express();

server.get("/", (req, res) => {
  res.send("My express server");
});

server.listen(port, () => {
  console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
});
