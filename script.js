document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  if (name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;
    document.getElementById('rsvp-list').appendChild(listItem);
    e.target.reset();
  }
});
