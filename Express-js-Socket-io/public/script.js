const send_button = document.querySelector("#sends")
const input = document.querySelector("#input")
const div_display = document.querySelector(".container-chats")

const socket = io()
socket.on("connect", () => console.log("Socket connected!"))

const createBubbleChat = chat => {
	const div_send = document.createElement("div")
	div_send.classList.add("chats")
	div_send.innerHTML = chat
	return div_send
}

send_button.addEventListener("click", ()=>{
	const bubbleChat = createBubbleChat(input.value)
	div_display.appendChild(bubbleChat)
	socket.emit("send-message", input.value)
	input.value = ""
})

socket.on("new-message", message => {
	const bubbleChat = createBubbleChat(message)
	bubbleChat.classList.add("chats-r")
	div_display.appendChild(bubbleChat)
})