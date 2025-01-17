// Countdown Timer
const tripDate = new Date("2025-08-15T12:00:00"); // Adjust to actual trip date

function updateCountdown() {
  const now = new Date();
  const diff = tripDate - now;

  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);

// RSVP Form Handling
document.getElementById('rsvp-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  if (name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    document.getElementById('rsvp-list').appendChild(listItem);
    e.target.reset();
  }
});
