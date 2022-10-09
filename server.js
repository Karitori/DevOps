const express = require("express");
const app = express();

app.get("/init", function (req, res) {
	res.send("Working Perfectly Fine ^_^");
});

app.get("/init2", function (req, res) {
	res.send("Working Perfectly Fine2 ^_^");
});

app.listen(3000, function () {
	console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});
