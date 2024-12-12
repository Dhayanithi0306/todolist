let container= document.querySelector('.container');
let input=document.getElementById('input');
let add=document.getElementById('add');

let tasklist=document.createElement('ul');
tasklist.className='taskli';
container.appendChild(tasklist);




add.addEventListener('click', ()=>{
   let taskText=input.value.trim();
   if(taskText==='')
   {
    alert('Please enter the task !');
    return;
   }
   

   let taskItem = document.createElement('li');
   taskItem.className='taskIt';
   
   let checkbox = document.createElement('input');
   checkbox.type = 'checkbox';
   checkbox.className = 'taskCheckbox';
   taskItem.appendChild(checkbox);
   
let taskContent=document.createElement('span');
taskContent.textContent = taskText;
taskContent.className='taskCon';
taskItem.appendChild(taskContent);

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    taskContent.style.textDecoration = 'line-through'; 
    taskContent.style.color = ' #2e0e13'; 
  } else {
    taskContent.style.textDecoration = 'none'; 
    taskContent.style.color = 'black'; 
  }
});
let editButton=document.createElement('button');
editButton.className='buttons';
let editIcon=document.createElement('i');
editIcon.className='edit';
editIcon.innerHTML=`<i class="fa-duotone fa-solid fa-pen-to-square"></i>`
editButton.appendChild(editIcon);
taskItem.appendChild(editButton);

let deleteButton=document.createElement('button');
deleteButton.className='buttons';
let deleteIcon=document.createElement('i');
deleteIcon.className='icon';
deleteIcon.innerHTML=`<i class="fa-solid fa-trash"></i>`
deleteButton.appendChild(deleteIcon);
taskItem.appendChild(deleteButton);

tasklist.appendChild(taskItem);

editButton.addEventListener('click', () => {
   let newTaskText = prompt('Edit your task:', taskContent.textContent);
   if (newTaskText !== null && newTaskText.trim() !== '') {
     taskContent.textContent = newTaskText.trim();
   }
 });


   deleteButton.addEventListener('click', () => {
   tasklist.removeChild(taskItem);
 });

});
