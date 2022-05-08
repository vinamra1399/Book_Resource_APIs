const express = require("express");
const app = express();
const book = require("./Book/models/books");
const router = require("./Book/routers/router")

require("./Book/db/connection");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

