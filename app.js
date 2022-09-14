const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  try {
    res.status(200).send({
      status: 1,
      msg: "Server is up.",
    });
  } catch (error) {
    res.status(500).send({
      status: 0,
      msg: "Server is down.",
    });
  }
});

app.listen(PORT, () => console.log(`Server Listinging on 4040`));
