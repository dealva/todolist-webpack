import './style.css';
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }
  
  const existingTasks = document.querySelectorAll('#taskList span');
  for (let task of existingTasks) {
    if (task.textContent.toLowerCase() === taskText.toLowerCase()) {
      alert('Task already exists!');
      return;
    }
  }

  const listItem = document.createElement('li');
  listItem.className = 'flex items-center justify-between bg-white p-3 rounded shadow';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskContent.className = 'flex-1 cursor-pointer';
  taskContent.onclick = () => {
    taskContent.classList.toggle('line-through');
    taskContent.classList.toggle('text-green-500');
  };

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '🗑️';
  deleteButton.className = 'ml-4 text-red-500 hover:text-red-700';
  deleteButton.onclick = () => {
    if (taskContent.classList.contains('line-through')) {
      listItem.remove();
    } else {
      alert('Please mark the task as done first!');
    }
  };

  listItem.appendChild(taskContent);
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  taskInput.value = '';
}

function resetTasks() {
  const confirmation = confirm('Are you sure you want to reset the list?');
  if (confirmation) {
    taskList.innerHTML = '';
  }
}

// Expose to window
window.addTask = addTask;
window.resetTasks = resetTasks;

console.log('checking');