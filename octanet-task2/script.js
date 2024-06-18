// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value;
        const dueDate = taskDate.value;
        const priority = taskPriority.value;
        const category = taskCategory.value;

        if (taskText.trim() === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const taskMeta = document.createElement('span');
        taskMeta.textContent = `Due: ${dueDate}, Priority: ${priority}, Category: ${category}`;

        taskDetails.appendChild(taskContent);
        taskDetails.appendChild(taskMeta);

        const taskActions = document.createElement('div');
        taskActions.classList.add('task-actions');

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            taskContent.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskActions.appendChild(completeBtn);
        taskActions.appendChild(deleteBtn);

        li.appendChild(taskDetails);
        li.appendChild(taskActions);

        taskList.appendChild(li);

        taskInput.value = '';
        taskDate.value = '';
        taskPriority.value = 'low';
        taskCategory.value = '';
    }
});