// require expressjs
const express = require("express");

const app = express();

// define port 8080
PORT = 8080;
app.use(express.json());
// use router to bundle all routes to /
const router = express.Router();
app.use("/", router);
// get on root route
router.get("/", (req, res) => {
  req.body;
  res.send("hello world!");
});
router.post("/", (req, res) => {
  console.log(`Received request payload: '${JSON.stringify(req.body)}'`);
  res.json(req.body);
});
// start server
const server = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}!!`);
});

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.");
  server.close(() => {
    console.log("Http server closed.");
  });
});
