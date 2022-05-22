

/*

in this file we are establishing the server.

After runnning the command "node server.js", we are able to navigate to the localhost to see the
output.

*/


var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io")(server);

app.get("/", function(req, res, next) {
    res.sendFile(__dirname + "/public/index.html");
    });

app.use(express.static("public"));

io.on("connection", function(client) {
    console.log("Client Connected. . .");

    client.on("join", function(data) {
        console.log(data);

    });

    client.on("messages", function(data) {
        client.emit("thread", data);
        client.broadcast.emit("thread", data);
    });
});

server.listen(7777);

//server.listen(7777);
