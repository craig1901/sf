var WebSocketServer = require("ws").Server;
var wsServer = new WebSocketServer({port:8080});
console.log("running script on 8080");
wsServer.on("connection", function (ws) {
    console.log("Connection established!");
    ws.send("Connection established!");
    ws.on("message", function (msg) {
        if(/ping/i.test(msg)){
            console.log("Received PING text:", msg);
            ws.send("PONG! CRAIG NOLAN");
        }
        else {
            console.log("No PING text recieved, instead got:", msg);
            ws.send("No PING message recieved");
        }

    });

    ws.on("close", function () {
        console.log("Client disconnected");
    });
});
