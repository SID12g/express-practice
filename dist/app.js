"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get("/test", function (req, res) {
    console.log(req);
    res.send({ hello: "world" });
});
app.post("/test", function (req, res) {
    res.send({ cat: "cheese" });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhos:".concat(port));
});
//# sourceMappingURL=app.js.map