const express = require("express");
const path = require("path");

const app = express();
const options = { root: path.join(__dirname) };
const PORT = 8080;

app.get("/", (req, res) => res.sendFile("./index.html", options));
app.get("/about", (req, res) => res.sendFile("./about.html", options));
app.get("/contact-me", (req, res) => res.sendFile("./contact-me.html", options));
app.get(/\/.+/, (req, res) => res.sendFile("./404.html", options));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
