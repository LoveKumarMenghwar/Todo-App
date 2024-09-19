var taskField = document.querySelector("#taskField");
var taskList = document.querySelector("#taskList");

// Global array to store tasks
var tasks = [];

// Function to render the tasks to the page
function displayTasks(){
    taskList.innerHTML = ""; 
    for(var i = 0; i < tasks.length; i++){
        taskList.innerHTML += `<li class="task-item">${tasks[i]} 
                                <button class="delete-btn" onclick="removeTask(${i})">Remove</button> 
                                <button class="edit-btn" onclick="updateTask(${i})">Modify</button></li>`;
    }
}

// Function to add a task to the array and re-render
function insertTask(){
    taskList.innerHTML = ""; 
    tasks.push(taskField.value); 
    console.log(tasks);
    displayTasks(); 
    taskField.value = ""; 
}

// Function to delete a specific task
function removeTask(i){
    taskList.innerHTML = ""; 
    console.log("Task " + tasks[i] + " removed");
    tasks.splice(i, 1); 
    console.log(tasks);
    displayTasks(); 
}

// Function to edit a specific task
function updateTask(i){
    taskList.innerHTML = ""; 
    console.log("Editing task: " + tasks[i]);
    var newTask = prompt("Enter the updated task");
    tasks.splice(i, 1, newTask); 
    displayTasks(); 
}



