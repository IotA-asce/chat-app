// ... DECLARING DEPENDENCIES > START ...
// .....................................................................
const express = require("express");

// ... declaring the web app server handler with express
const app = express();                  

// ... http lib required to build server with socket.io
const http = require("http");

// ... cors required to deal with socket issue (issue no. : [1])
// ... ... socket server requires specified access to origin points
// ... ... these origin points ( client url ) if not mentioned 
// ... ... do not get access to connect to socket based server
const cors = require("cors");

// ... class Server imported from socket.io lib
const { Server } = require("socket.io")

// ... default server port / client runs on port 3000
const PORT = 3001
// .....................................................................
// ... DECLARING DEPENDENCIES > END ...



// ... INITIALIZING VARIABLES FOR SERVER > START ...
// .....................................................................

// ... cors integrated with express app to resolve issue [1]
app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {                                 
        origin: "http://localhost:3000",    // ... issue [1], client url set for access
        methods: ["GET", "POST"],           // ... methods, requests accepted specified
    }
})

// ... INITIALIZING VARIABLES FOR SERVER > END ...
// .....................................................................



// ... SOCKET.IO SERVER WORKFLOW > START ...
// .....................................................................

// ... listening to socket client connection requests
io.on("connection", (socket) => {
    console.log(` ... user with socket id : <${socket.id}> connected to server`)


    // ... socket method to join client to room
    socket.on("join_room", (data) => {
        socket.join(data)                       // ... data contains room name passed from client
        console.log(` ... ... user with id: <{${socket.id}}> joined room <"${data}">`)
    })

    socket.on("send_message", (data) => {
        console.log(data)
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnecting", () => {
        // console.log(socket.rooms);
        console.log("Existing rooms > ")
        socket.rooms.forEach(element => {
            console.log(" ...", element);
        });
    })

    // ... listening to disconnect event for a socket client
    socket.on("disconnect", () => {
        console.log(` ... user with socket id : <${socket.id}> disconnected`)
    })
})

// .....................................................................
// SOCKET.IO SERVER WORKFLOW > END ...

// ... Start a server listening for connections.
server.listen(PORT, () => {

    console.log(`server running at port ${PORT}`);

})













// io.on("connection", (socket) => {
//     console.log(`new client with id ${socket.id}`);

//     socket.on("join_room", (data) => {
//         socket.join(data)
//     })

//     socket.on("disconnect", () => {
//         console.log(`client with id: ${socket.id} disconnected`);
//     })
// });