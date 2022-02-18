const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.use(express.static("public"))

io.on("connection", socket => {
	console.log("Socket connected!!!")
	socket.on("send-message", message => {
		socket.broadcast.emit("new-message", message)
	})
})

server.listen(3000)