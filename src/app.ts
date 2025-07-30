import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Halo dari Express API dengan serverless-http!" });
});

export default app;
