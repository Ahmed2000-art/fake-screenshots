var myStartButton = document.getElementById('myStartButton')
var finishButton = document.getElementById('finishButton')

var myTimeInput = document.getElementById('myTimeInput')
var myMessageInput = document.getElementById('myMessageInput')

var yourData = document.getElementById('your-data')
myStartButton.onclick = function () {
	var container = document.getElementById('container')

	var myMessage = document.createElement("div")
	var myImage = document.createElement("img")
	myImage.src = "you.jpg"
	var myStatu = document.createElement("img")
	myStatu.src = "not-connected.png"
	var name = document.createElement("p")
	var nameText = document.createTextNode('You')
	var time = document.createElement("p")
	var timeText = document.createTextNode(myTimeInput.value)
	var message = document.createElement("p")
	var messageText = document.createTextNode(myMessageInput.value)
	var threeDots = document.createElement("div")
	var verticalLine = document.createElement("div")

	name.appendChild(nameText)
	time.appendChild(timeText)
	message.appendChild(messageText)

	myMessage.appendChild(myImage)
	myMessage.appendChild(myStatu)
	myMessage.appendChild(name)
	myMessage.appendChild(time)
	myMessage.appendChild(message)
	myMessage.appendChild(threeDots)
	myMessage.appendChild(verticalLine)

	myMessage.classList.add("my-message")
	myImage.classList.add("myImage")
	myStatu.classList.add("myStatu")
	name.classList.add("name")
	time.classList.add("time")
	message.classList.add("message")
	threeDots.classList.add("three-dots")
	verticalLine.classList.add("vertical-line")

	container.appendChild(myMessage)
}


var victimStartButton = document.getElementById('victimStartButton')
var finishButton = document.getElementById('finishButton')

var victimNameInput = document.getElementById('victimNameInput')
var victimTimeInput = document.getElementById('victimTimeInput')
var victimMessageInput = document.getElementById('victimMessageInput')

var victimData = document.getElementById('victim-data')
victimStartButton.onclick = function () {
	var container = document.getElementById('container')

	var victimMessage = document.createElement("div")
	var victimImage = document.createElement("img")
	victimImage.src = "victim.png"
	var victimStatu = document.createElement("img")
	victimStatu.src = "dont-disturb.png"
	var name = document.createElement("p")
	var nameText = document.createTextNode(victimNameInput.value)
	var time = document.createElement("p")
	var timeText = document.createTextNode(victimTimeInput.value)
	var message = document.createElement("p")
	var messageText = document.createTextNode(victimMessageInput.value)
	var threeDots = document.createElement("div")

	name.appendChild(nameText)
	time.appendChild(timeText)
	message.appendChild(messageText)

	victimMessage.appendChild(victimImage)
	victimMessage.appendChild(victimStatu)
	victimMessage.appendChild(name)
	victimMessage.appendChild(time)
	victimMessage.appendChild(message)
	victimMessage.appendChild(threeDots)

	victimMessage.classList.add("victim-message")
	victimImage.classList.add("victimImage")
	victimStatu.classList.add("victimStatu")
	name.classList.add("name")
	time.classList.add("time")
	message.classList.add("message")
	threeDots.classList.add("three-dots")

	container.appendChild(victimMessage)
}


finishButton.onclick = function () {
	yourData.classList.add("hide")
	myTimeInput.classList.add("hide")
	myMessageInput.classList.add("hide")
	myStartButton.classList.add("hide")

	victimData.classList.add("hide")
	victimNameInput.classList.add("hide")
	victimTimeInput.classList.add("hide")
	victimMessageInput.classList.add("hide")
	victimStartButton.classList.add("hide")

	finishButton.classList.add("hide")
}