const monsterForm = document.getElementById('monster-form');

monsterForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  // Get the values entered in the form
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const description = document.getElementById('description').value;

  // Create a new monster object
  const newMonster = {
    name: name,
    age: age,
    description: description
  };

  // Add the new monster to the list and save it in the API
  // You'll need to implement this part based on your specific API and data handling logic

  // Clear the form inputs
  monsterForm.reset();
});