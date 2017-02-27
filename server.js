console.log("running script");
var WebSocketServer = require("ws").Server;
var wsServer = new WebSocketServer({port:8080});

wsServer.on("connection", function (ws) {
    console.log("Connection established!");
    ws.send("Connection established!");
    ws.on("message", function (msg) {
        if(/ping/i.test(msg)){
            ws.send("PONG! CRAIG NOLAN");
        }
        else {
            ws.send("No PING message recieved");
        }

        console.log("Received:", msg);
    });

    ws.on("close", function () {
        console.log("Client disconnected");
    });
});
