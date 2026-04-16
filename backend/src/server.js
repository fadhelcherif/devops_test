const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

app.get("/api/health", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
