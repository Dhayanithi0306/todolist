
const input = document.getElementById('input');
const addButton = document.getElementById('add');
const container = document.querySelector('.container');

const taskList = document.createElement('ul');
taskList.className = 'task-list';
container.appendChild(taskList);


addButton.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  taskContent.className = 'task-content';
  taskItem.appendChild(taskContent);

 
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit-btn';
  taskItem.appendChild(editButton);


  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  taskItem.appendChild(deleteButton);

 
  taskList.appendChild(taskItem);

 
  input.value = '';

 
  editButton.addEventListener('click', () => {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
      taskContent.textContent = newTaskText.trim();
    }
  });

 
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
});
