const express = require("express")
const pckage = require("./package.json")


const app = express()

app.get("/init", function (req, res) {
	res.send("Working Perfectly Fine ^_^");
});

app.get("/healthCheck", function (req, res) {
	res.send(pckage.version);
});
app.get("/", function (req, res) {
	res.send("Working As Expected ^_^");
});

module.exports = app
