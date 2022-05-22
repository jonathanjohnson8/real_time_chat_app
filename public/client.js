/*
Here, we connect with socket.io to connect to our server
This serves as "middleware" or a bridge between the server and the client.
*/

//here, we connect with socket.io to connect to our server
var socket = io.connect("https://real-time-chat-app-kappa.vercel.app/");
socket.on("connect", function(data) {
  socket.emit("join", "Hello server from client");
});

// listeners for specific evetns. A listener is similar to a sensor that alerts the
// developer when something happens.

socket.on("thread", function(data) {
    $("#thread").append("<li>" + data + "</li>");
});

// when action happens, it sends message to server, resets & prevents "default form action" ??

$("form").submit(function() {
    var message = $("#message").val();
    socket.emit("messages", message);
    this.reset();
    return false;
});
