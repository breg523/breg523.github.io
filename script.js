// Countdown to May 27th, 2024
const countdown = () => {
  const tripDate = new Date('May 27, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const timeLeft = tripDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "The trip has begun! 🎉";
  }
};

const countdownInterval = setInterval(countdown, 1000);
