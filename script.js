

let editMode = false; 
let taskBeingEdited = null; 

// Add Task Button
const addTaskButton = document.getElementById('add-task');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add or update a task
addTaskButton.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task');
    return;
  }

  if (editMode) {
    // Update existing task if in edit mode
    taskBeingEdited.textContent = taskText;
    editMode = false;
    taskBeingEdited = null;
    addTaskButton.textContent = 'Add Task';  // Reset button text to "Add Task"
  } else {
    // Add new task if not in edit mode
    const li = document.createElement('li');
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('green-btn');
    editButton.addEventListener('click', () => editTask(taskContent));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('red-btn');
    deleteButton.addEventListener('click', () => deleteTask(li));

    li.appendChild(taskContent);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }

  taskInput.value = '';  // Clear input 
});

// delete a task
function deleteTask(task) {
  taskList.removeChild(task);
}

//edit a task
function editTask(taskContent) {
  taskInput.value = taskContent.textContent;  
  taskBeingEdited = taskContent;  
  editMode = true; 
  addTaskButton.textContent = 'Update Task'; 
}










// customer enquiry form submission
const enquiryForm = document.getElementById('enquiry-form');
enquiryForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  console.log('Customer Enquiry:', {
    Name: name,
    Email: email,
    Message: message
  });

  alert('Enquiry submitted successfully! Check console for details.');
  enquiryForm.reset();
});
