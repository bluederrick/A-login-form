import express from "express";
import "dotenv/config";
const app = express();
import cors from "cors";

var allowlist = ["*"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (
    allowlist.indexOf(req.header("Origin")) !== -1 ||
    allowlist.includes("*")
  ) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(express.json(), cors(corsOptionsDelegate));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.status(200).send({ message: "working" });
});

app.post("/register", (req, res) => {
  console.log(req.body);
});

app.listen(process.env.port, () => {
  console.log(`listening on port ${process.env.port}`);
});
