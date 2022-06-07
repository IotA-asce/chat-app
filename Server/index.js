// ... DECLARING DEPENDENCIES > START ...
// .....................................................................
const express = require('express');
// ... declaring the web app server handler with express
const app = express();
// ... http lib required to build server with socket.io
const http = require('http');
// ... cors required to deal with socket issue (issue no. : [1])
// ... ... socket server requires specified access to origin points
// ... ... these origin points ( client url ) if not mentioned 
// ... ... do not get access to connect to socket based server
const cors = require('cors');
// ... class Server imported from socket.io lib
const { Server } = require('socket.io');
// ... default server port / client runs on port 3000
const PORT = 3002;

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

app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
    cors: {                                  //required to bypass the cors error
        // origin: "http://localhost:3000",
        origin: ["http://localhost:3000","http://192.168.0.16:3000"],
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("user connected", socket.id);

    socket.on("join-room", (data) => {
        console.log("user with id", socket.id, "joined room : ", data);
        socket.join(data);
    })

    socket.on("send-message", (data) => {
        console.log(data);
        socket.to(data.room).emit("recieve-message", data);

    })



    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
    })
})

server.listen(PORT, () => {
    console.log(`server up and running at port ${PORT}`);
});