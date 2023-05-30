// Obtener elementos del DOM
const form = document.querySelector('form');
const nomb = document.getElementById('name');
const email = document.getElementById('email');
const section = document.querySelector('section');
const button = document.getElementById('remove');
const obj = {
    name: "",
    email: ""
}

// Manejar el evento de enviar el formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Capturar los datos del formulario
    obj.name = nomb.value;
    obj.email = email.value;
    // Guardar el objeto en localStorage
    localStorage.setItem('person', JSON.stringify(obj));
    //showName();
    //showEmail();
    showPerson();
    nomb.value = "";
    email.value = "";
});

button.addEventListener('click', function () {
    //deleteName();
    deletePerson();
});

// Función para mostrar el nombre guardado en localStorage
function showName() {
    const name = localStorage.getItem('name');
    // Comprobar si el nombre está vacío
    if(name === null || name === "") {
        section.textContent = "Faltan datos";
    } else {
        section.textContent = "Su nombre es " + name;
    }
}

// Función para mostrar todos los datos de la persona guardados en localStorage
function showPerson() {
    const person = JSON.parse(localStorage.getItem('person'));
    // Comprobar si el nombre está vacío
    if(person.name === null || person.name === "") {
        section.textContent = "Faltan datos";
    }
    else if(person.email === null || person.email === "") {
        section.textContent = "Faltan datos";
    }
    else {
        section.textContent = "Su nombre es " + person.name + " y su correo es " + person.email;
    }
}

// Función para borrar el nombre guardado en localStorage
function deleteName() {
    const name = localStorage.getItem('name');
    // Comprobar si el Storage está vacío
    if(localStorage.getItem('name') === null || localStorage.getItem('name' === "")) {
        section.textContent = "No hay datos que borrar";
    } else {
        localStorage.removeItem('name');
        section.textContent = name + " eliminado satisfactoriamente"
    }
}

function deletePerson() {
    const person = JSON.parse(localStorage.getItem('person'));
    // Comprobar si el Storage está vacío
    if(localStorage.getItem('person') === null || localStorage.getItem('person' === "")) {
        section.textContent = "No hay datos que borrar";
    } else {
        localStorage.removeItem('person');
        section.textContent = person.name + " eliminado satisfactoriamente"
    }
}

// Mostrar el nombre guardado al cargar la página
// showName();