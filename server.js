const express = require("express");
const app = express();
const package = require("./package.json");

app.get("/init", function (req, res) {
	res.send("Working Perfectly Fine ^_^");
});

app.get("/healthCheck", function (req, res) {
	res.send(package.version);
});


app.listen(3000, function () {
  console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});
