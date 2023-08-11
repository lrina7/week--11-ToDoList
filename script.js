const inputElement = document.querySelector('.task');
const taskList = document.querySelector('ul');
const button = document.querySelector('.button');

button.addEventListener('click', function() {
  const inputValue = inputElement.value;
  const newTask = document.createElement('li');
  newTask.textContent = inputValue;
  taskList.append(newTask);
  inputElement.value = "";
  }
);

taskList.addEventListener('click', function(evt) {
  if(evt.target.tagName === 'LI') {
    evt.target.classList.toggle("completed");
  }
  })