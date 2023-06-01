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
    if(task.value === "") {
        alert("Ingrese una tarea");
        return;
    } else {
        // se almacena el objeto Task
        obj.id = numTasks++;
        obj.title = task.value;
        obj.completed = false;
        // prueba
        console.log(obj);
        createTask(obj);
    }
    //input.addEventListener("click", handleCheckTask);
}

function createTask (x) {
    const ul = document.getElementById("list");
    const li = document.createElement("li");
    const fragment = document.createDocumentFragment();
    const input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", x.id);
    const text = xli.textContent = obj.title;
    li.appendChild(input);
    ul.appendChild(li);
    
    
}

function handleCheckTask (event) {

}

function handleDelete (event) {

}