import express from "express";
import cors from "cors";
const app = express();
const PORT = 8080;
app.use(cors());

// Chrome.error == "Too many redirects"
// https://stackoverflow.com/questions/37706451/node-express-too-many-redirects
app.all("/", (req, res) => {
  res.redirect("/status");
});

app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.use("/status", (req, res) => {
  res.send({
    status: "auth-api - running on port :8080",
  });
});

app.listen(PORT, () =>
  console.log(`API is running on http://172.16.150.189:${PORT}/login`)
);
