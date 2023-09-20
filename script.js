
let tasks = [];


function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = "";
        displayTasks();
    }
}


function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const li = document.createElement("li");

        if (task.completed) {
            li.className = "completed";
        }

        li.innerHTML = `
            ${task.text}
            <button onclick="toggleTask(${i})">Erledigt</button>
            <button onclick="deleteTask(${i})">Löschen</button>
        `;

        taskList.appendChild(li);
    }
}


function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}


displayTasks();
