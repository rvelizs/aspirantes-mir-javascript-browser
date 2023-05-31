let numTasks = 1;

const obj = {
    id: numTasks,
    title: "",
    completed: false
}

const btn = document.getElementById("btn");
btn.addEventListener("click", handleSubmit);

const task = document.getElementById("task");


function handleSubmit (event) {
    event.preventDefault();
    // objeto Task
    obj.id = numTasks++;
    obj.title = task.value;
    obj.completed = false;
    console.log(obj);
    createTask(obj);
    //input.addEventListener("click", handleCheckTask);
}

function createTask (x) {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    li.appendChild(ul);
    li.textContent(x.title);
}

function handleCheckTask (event) {

}

function handleDelete (event) {

}