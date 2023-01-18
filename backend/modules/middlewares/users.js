import express from "express";
import cors from "cors";
const app = express();

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
  callback(null, true); // callback expects two parameters: error and options
};

const middlewares = () => {
  app.use(express.json(), cors(corsOptionsDelegate));
  app.use(express.urlencoded({ extended: true }));
};
export default middlewares;
