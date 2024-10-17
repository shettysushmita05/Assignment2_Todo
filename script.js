// Selecting elements for the To-Do List
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList'); // Correct ID for the task list

let editMode = false;
let currentTaskElement = null;

// Add or Update Task function
function addOrUpdateTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Please enter a task');
        return;
    }

    if (editMode) {
        currentTaskElement.querySelector('.task-text').textContent = taskText;
        exitEditMode();
    } else {
        createTaskElement(taskText);
    }

    taskInput.value = ''; // Clear input
}

// Create a task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="green-btn" onclick="editTask(this)">Edit</button>
        <button class="red-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li); // Append the new task to the task list
}

// Edit task function
function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector('.task-text').textContent;
    taskInput.value = taskText;
    editMode = true;
    currentTaskElement = taskItem;
    addTaskBtn.textContent = 'Update Task';
}

// Delete task function
function deleteTask(button) {
    button.parentElement.remove();
}

// Exit edit mode
function exitEditMode() {
    editMode = false;
    currentTaskElement = null;
    addTaskBtn.textContent = 'Add Task';
}

// Add task button click event
addTaskBtn.addEventListener('click', addOrUpdateTask);

// Handle customer enquiry submission
document.getElementById('submitEnquiry').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('customerMessage').value;

    if (name && email && message) {
        console.log('Customer Enquiry:', { name, email, message });
        alert('Enquiry submitted!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('customerMessage').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});
