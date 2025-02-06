var alumnos = [];

// Función para agregar un alumno a la lista y actualizar la tabla
function agregarAlumno() {
    var nombre = document.getElementById("nombreAlumno").value;
   // Verificar si el campo está vacío
   if (nombre == "") {
    alert("Por favor ingrese un nombre");
    return;
}

    alumnos.push(nombre);  // Añadir el nombre a la lista

    // Actualizamos la tabla con la lista de alumnos
    actualizarTabla();
document.getElementById("nombreAlumno").value = "";

alumnos.push(nombre);  // Añadir el nombre a la lista

// Actualizamos la tabla con la lista de alumnos
actualizarTabla();
document.getElementById("nombreAlumno").value = "";
}

// Función para actualizar la tabla de alumnos
function actualizarTabla() {
var tabla = document.getElementById("tablaAlumnos");
tabla.innerHTML = "";  // Limpiar la tabla

// Recorrer la lista de alumnos y crear una fila por cada uno
for (var i = 0; i < alumnos.length; i++) {
    var fila = tabla.insertRow();
    var celdaIndice = fila.insertCell(0);
    var celdaNombre = fila.insertCell(1);
    var celdaEliminar = fila.insertCell(2);

    celdaIndice.innerHTML = i + 1;  // Mostrar el índice (empezando desde 1)
    celdaNombre.innerHTML = alumnos[i];

    // Botón de eliminar
    var botonEliminar = document.createElement("");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.onclick = function() {
        eliminarAlumno(i);  // Llamar a la función para eliminar el alumno
    };
    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.onclick = (function(indice) {
        return function() {
            eliminarAlumno(indice);
        };
    })(i);
    celdaEliminar.appendChild(botonEliminar);
}
}

// Función para eliminar un alumno de la lista
function eliminarAlumno(indice) {
alumnos.splice(indice, 1);  // Eliminar el alumno de la lista (por índice)
actualizarTabla();
}