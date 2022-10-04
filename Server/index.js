const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/auth", require("./routes/auth"));
app.use("/api/history", require("./routes/history"));
app.use("/api/history", require("./routes/hospital"));
app.use("/", (req, res) => {
  res.send("Medic-Helper home");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
