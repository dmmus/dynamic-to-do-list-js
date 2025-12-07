document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Add a new task to the list
    function addTask() {
        // Get the input value (without trimming, as strict instructions did not request it)
        const taskText = taskInput.value;

        // "if taskText is not empty"
        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement('li');
            
            // Set its textContent to taskText
            li.textContent = taskText;

            // Create a new button element for removing the task
            const removeBtn = document.createElement('button');
            
            // Set its textContent to "Remove"
            removeBtn.textContent = "Remove";
            
            // Give it a class name of 'remove-btn'
            removeBtn.className = "remove-btn";

            // Assign an onclick event to the remove button
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button to the li element
            li.appendChild(removeBtn);

            // Append the li to taskList
            taskList.appendChild(li);

            // Clear the task input field
            taskInput.value = "";
        }
    }

    // Attach Event Listeners
    
    // Add an event listener to addButton that calls addTask when clicked
    addButton.addEventListener('click', addTask);

    // Add an event listener to taskInput for the 'keypress' event
    taskInput.addEventListener('keypress', function (event) {
        // Check if event.key is equal to 'Enter'
        if (event.key === "Enter") {
            addTask();
        }
    });
});