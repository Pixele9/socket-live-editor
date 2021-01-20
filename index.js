const express = require("express")
const app = express()
const path = require("path")

// settings
app.set("port", process.env.PORT || 5001)

// set static files
app.use(express.static(path.join(__dirname, "public")))

// start server
const server = app.listen(app.get("port"), () => {
    console.log("server running on port: ", app.get("port"))
})

// websockets
const SocketIO = require("socket.io")
const io = SocketIO(server) // server already initialized

io.on("connection", (socket) => {
    console.log("new connection", socket.id)

    socket.on("code:changed", (data) => {
        console.log(data)
        socket.broadcast.emit("code:changed", data)
    })
})
