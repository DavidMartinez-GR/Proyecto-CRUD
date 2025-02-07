let alumnos = []; // Array para almacenar los nombres de los alumnos

// Función para agregar un alumno
function agregarAlumno() {
    let nombreAlumno = document.getElementById('nombreAlumno').value;

    if (nombreAlumno !== "") {
        alumnos.push(nombreAlumno); // Agregar el nombre al array
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto

        // Mostrar mensaje de éxito
        document.getElementById('mensaje').textContent = `Alumno "${nombreAlumno}" agregado correctamente.`;

        // Generar la tabla con los nombres actualizados
        mostrarTabla();
    } else {
        document.getElementById('mensaje').textContent = "Por favor, ingresa un nombre válido.";
    }
}

// Función para eliminar un alumno
function eliminarAlumno(index) {
    alumnos.splice(index, 1); // Eliminar el alumno en la posición 'index'
    mostrarTabla(); // Volver a generar la tabla con los datos actualizados
}

// Función para generar y mostrar la tabla de alumnos
function mostrarTabla() {
    let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
    
    // Recorrer el array de alumnos y agregar una fila por cada nombre
    for (let i = 0; i < alumnos.length; i++) {
        texto += `
        <tr>
            <td>${i + 1}</td>
            <td>${alumnos[i]}</td>
            <td><button class="eliminar" onclick="eliminarAlumno(${i})">Eliminar</button></td>
        </tr>`;
    }

    // Añadir la fila con el total de alumnos
    texto += `
    <tr>
        <td colspan="3">Total de Alumnos: ${alumnos.length}</td>
    </tr>`;

    texto += "</tbody></table>";
    
    // Insertar la tabla generada en el contenedor de la tabla
    document.getElementById('tablaContainer').innerHTML = texto;
}

// Función para comprobar si se presionó Enter
function comprobarEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
        agregarAlumno(); // Si se presiona Enter, agrega el alumno
    }
}

// Asignar el evento de manera explícita
document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);
