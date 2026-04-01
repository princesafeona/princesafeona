const messageButton = document.getElementById("messageButton");
const messageText = document.getElementById("messageText");

messageButton.addEventListener("click", () => {
  messageText.textContent = "Nice work! Your JavaScript is connected.";
});
