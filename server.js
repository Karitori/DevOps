const express = require("express");
const app = express();

app.get("/Init", function (req, res) {
	return "Working Perfectly Fine";
});

app.listen(3000, function () {
	console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});
