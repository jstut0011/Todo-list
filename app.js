let tasks = [];

const addTask = () => {
  let taskInput = document.getElementById('taskInput');
  let task = taskInput.value;

  // Add task to list
  tasks.push(task);

  // Clear input value
  taskInput.value = '';

  // Display Todolist
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    let taskItem = document.createElement('li');
    taskItem.classList.add('taskItem');
    taskItem.innerText = tasks[i];
    taskList.appendChild(taskItem);
  }
};

// Listen for task execution
let addTaskButton = document.getElementById('addTaskButton');
addTaskButton.addEventListener('click', (e) => {
  e.preventDefault(); // Remove the refresh
  addTask();
});

//Listen Enter button
let taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
  }
});
