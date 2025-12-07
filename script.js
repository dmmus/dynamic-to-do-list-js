document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // 1. Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // 2. Check if taskText is empty. If so, use alert.
        if (taskText === "") {
            alert("Please enter a task");
            return; // Exit the function so we don't add an empty task
        }

        // If taskText is not empty, proceed with creation:
        
        // Create new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Assign onclick event to the remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button to li, and li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});