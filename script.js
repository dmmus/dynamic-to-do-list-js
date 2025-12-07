document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask Function
    function addTask() {
        // 1. Retrieve and trim the value (Required by previous constraints)
        const taskText = taskInput.value.trim();

        // 2. Check if taskText is empty and alert (Required by previous constraints)
        if (taskText === "") {
            alert("Please enter a task");
            return; 
        }

        // Task Creation and Removal Logic: If taskText is not empty
        // -----------------------------------------------------------
        
        // Create a new li element
        const li = document.createElement('li');
        
        // Set its textContent to taskText
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        
        // Set its textContent to “Remove”
        removeBtn.textContent = "Remove";
        
        // Give it a class name of ‘remove-btn’ (Fixes the classList.add error)
        removeBtn.className = "remove-btn";

        // Assign an onclick event to the remove button
        removeBtn.onclick = function () {
            // Removes the li element from taskList
            taskList.removeChild(li);
        };

        // Append the remove button to the li element
        li.appendChild(removeBtn);
        
        // Append the li to taskList
        taskList.appendChild(li);

        // Clear the task input field
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