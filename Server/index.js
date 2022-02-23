const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io")

const PORT = 3001

app.use(cors());

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    }
})

io.on("connection", (socket) => {
    console.log(`new client with id ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data)
    })

    socket.on("disconnect", () => {
        console.log(`client with id: ${socket.id} disconnected`);
    })
});

server.listen(PORT, () => {

    console.log(`server running at port ${PORT}`);

})