// Obtener elementos del DOM
const form = document.querySelector('form');
const input = document.querySelector('input');
const section = document.querySelector('section');
const button = document.querySelector('button');

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    localStorage.setItem('name', input.value);
    showName();
    input.value = "";
});

button.addEventListener('click', function () {
    deleteName();
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
    const name = localStorage.getItem('name');
    if(name === null || name === "") {
        section.textContent = "Faltan datos";
    } else {
        section.textContent = "Su nombre es " + name;
    }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
    localStorage.removeItem('name');
}

// Mostrar el nombre guardado al cargar la página
showName();