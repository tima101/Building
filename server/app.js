const express = require("express");
const next = require("next");

const mongoose = require("mongoose");

const dev = process.env.NODE_ENV !== "production";
const MONGO_URL = process.env.MONGO_URL_TEST;

const options = {
  useNewURLParser: true,
  useCreateIndex: true,
  useFindAndModify: false
};

mongoose.connect(MONGO_URL, options);

const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    const user = { email: "team@builderbook.org" };
    app.render(req, res, "/", { user });
  });

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
