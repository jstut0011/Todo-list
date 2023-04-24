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
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task--container');
    let addCheckbox = document.createElement('input');
    addCheckbox.type = 'checkbox';
    addCheckbox.setAttribute('id', 'taskCheckbox');
    addCheckbox.classList.add('task--checkbox');
    let taskItem = document.createElement('li');
    taskItem.classList.add('task--item');
    taskItem.innerText = tasks[i];
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete--button');
    let editButton = document.createElement('button');
    editButton.innerHTML = 'edit';
    editButton.classList.add('edit--button');

    //Add child to parents
    taskList.appendChild(taskContainer);
    taskContainer.appendChild(addCheckbox);
    taskContainer.appendChild(taskItem);
    taskContainer.appendChild(deleteButton);
    taskContainer.appendChild(editButton);
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
