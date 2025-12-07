document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // --- Local Storage Functions ---

    /**
     * Saves the current list of tasks (li elements) to Local Storage.
     * This function is called after adding or removing a task.
     */
    function saveTasks() {
        // Get all task text content from the current DOM list items
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            // Get the text content, excluding the 'Remove' button's text
            let taskText = li.textContent.replace('Remove', '').trim();
            tasks.push(taskText);
        });

        // Save the array to Local Storage, serialized as a JSON string
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    /**
     * Loads tasks from Local Storage and populates the DOM.
     */
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Use the addTask function for each stored task, setting 'save' to false
        storedTasks.forEach(taskText => addTask(taskText, false)); 
    }

    // --- Core Task Management Functions ---

    /**
     * Adds a new task to the DOM and optionally saves it to Local Storage.
     * @param {string} taskText - The text content of the new task.
     * @param {boolean} [save=true] - Whether to save the task to Local Storage after creation.
     */
    function addTask(taskText, save = true) {
        
        // If taskText is provided as a parameter (e.g., from loadTasks), use it directly.
        // If the function is called without a parameter (e.g., from the Add button),
        // retrieve and trim the value from the input field.
        if (taskText === undefined) {
             taskText = taskInput.value.trim();
        }

        // Check if taskText is empty and alert (Required by previous constraints)
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Task Creation Logic:
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn"; // Adhering to .className assignment

        // Assign an onclick event to the remove button
        removeBtn.onclick = function () {
            // 1. Remove the li element from the DOM
            taskList.removeChild(li);
            
            // 2. Update Local Storage after removal
            saveTasks();
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field only if the task was added manually (not loaded)
        if (save) {
            taskInput.value = "";
            
            // 3. Update Local Storage after addition
            saveTasks();
        }
    }

    // --- Event Listeners and Initialization ---

    // Load tasks from Local Storage when the page loads
    loadTasks(); 

    // Add event listener for the Add Task button
    addButton.addEventListener('click', () => addTask());

    // Add event listener for the 'Enter' keypress in the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});