function validateForm() {
  const name = document.getElementById('name').value;
  const dateOfBirth = document.getElementById('date_of_birth').value;
  const dateOfDeath = document.getElementById('date_of_death').value;
  const content = document.getElementById('content').value;
  const author = document.getElementById('author').value;

  if (!name || !dateOfBirth || !dateOfDeath || !content || !author) {
      alert('All fields are required!');
      return false;
  }

  if (new Date(dateOfDeath) < new Date(dateOfBirth)) {
      alert('Date of death cannot be earlier than date of birth!');
      return false;
  }

  return true;
}
