import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from express endpoint" });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
