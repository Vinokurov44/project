let input= localStorage.getItem('input')

var welcomeMessage = document.getElementById("title2");

var valueSpan = document.createElement("span");

valueSpan.textContent = input;

valueSpan.style.color = "rgb(253, 253, 254)";

welcomeMessage.appendChild(valueSpan);