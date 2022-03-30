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

// ... mongoClient connects to the mongodb db using the mongo url
// ... ... and provides the Framework to perform CRUD operations 
const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

// .....................................................................
// ... DECLARING DEPENDENCIES > END ...








// .....................................................................
// ... CONNECTING TO MONGODB DB USING UNIQUE URL > START
const uri = 'mongodb+srv://oldman:fairbanks@cluster0.zizuq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri);
// ... CONNECTING TO MONGODB DB USING UNIQUE URL > END
// .....................................................................







// ... INITIALIZING VARIABLES FOR SERVER > START ...
// .....................................................................

// ... cors integrated with express app to resolve issue [1]
app.use(cors());

const server = http.createServer(app)

const io = new Server(server, {
    cors: {                                 
        origin: "http://localhost:3002",    // ... issue [1], client url set for access
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

    console.log(` >> server running at port \t\t\t\x1b[30m\x1b[43m\x1b[5m ${PORT} \x1b[37m\x1b[40m`);
    if( client ) console.log(' >> mongo client connected < client username:', "\x1b[30m\x1b[43m" ,'oldman', "\x1b[37m\x1b[40m", ">" )

})

// Reset = "\x1b[0m"
// Bright = "\x1b[1m"
// Dim = "\x1b[2m"
// Underscore = "\x1b[4m"
// Blink = "\x1b[5m"
// Reverse = "\x1b[7m"
// Hidden = "\x1b[8m"

// FgBlack = "\x1b[30m"
// FgRed = "\x1b[31m"
// FgGreen = "\x1b[32m"
// FgYellow = "\x1b[33m"
// FgBlue = "\x1b[34m"
// FgMagenta = "\x1b[35m"
// FgCyan = "\x1b[36m"
// FgWhite = "\x1b[37m"

// BgBlack = "\x1b[40m"
// BgRed = "\x1b[41m"
// BgGreen = "\x1b[42m"
// BgYellow = "\x1b[43m"
// BgBlue = "\x1b[44m"
// BgMagenta = "\x1b[45m"
// BgCyan = "\x1b[46m"
// BgWhite = "\x1b[47m"