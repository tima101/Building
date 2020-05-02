const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("My express server");
});

server.listen(3000, () => {
  console.log("Ready on port 3000!"); // eslint-disable-line no-console
});
