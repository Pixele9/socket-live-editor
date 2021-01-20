const socket = io()

const content = document.getElementById("content")

content.addEventListener("keyup", () => {
    const text = content.value
    socket.emit("code:changed", text)
})

socket.on("code:changed", data => {
    content.value = data
})
