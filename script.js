document.getElementById("rsvp-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("response-message").textContent = `Thanks for RSVPing, ${name}!`;
});
