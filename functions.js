let alumnos = []; // Array para almacenar los nombres de los alumnos
let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno
let nombresInvertidos = false; // Variable para controlar si los nombres están invertidos o no

// Función para agregar un alumno
function agregarAlumno() {
    let nombreAlumno = document.getElementById('nombreAlumno').value;

    if (nombreAlumno !== "") {
        alumnos.push(nombreAlumno); // Agregar el nombre al array
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        document.getElementById('mensaje').textContent = `Alumno "${nombreAlumno}" agregado correctamente.`;
        mostrarTabla(); // Mostrar la tabla actualizada
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    } else {
        document.getElementById('mensaje').textContent = "Por favor, ingresa un nombre válido.";
    }
}

// Función para eliminar un alumno
function eliminarAlumno(index) {
    alumnos.splice(index, 1); // Eliminar el alumno en la posición 'index'
    mostrarTabla(); // Volver a generar la tabla con los datos actualizados
}

// Función para mostrar los detalles de un nombre
function mostrarDetalles(index) {
    let nombre = alumnos[index];
    let longitud = nombre.length;
    let promedioLongitud = calcularPromedioLongitud();
    let nombreMasCorto = obtenerNombreMasCorto();
    let nombreMasLargo = obtenerNombreMasLargo();
    let numVocales = contarVocales(nombre);

    let longitudComparacion = longitud === promedioLongitud ? 'igual al promedio' : (longitud > promedioLongitud ? 'por encima del promedio' : 'por debajo del promedio');
    let tipoNombre = (longitud === nombreMasCorto) ? 'más corto' : (longitud === nombreMasLargo) ? 'más largo' : 'ninguno de los dos';

    let detalles = `  
      <div class="informacion-detalle">
        <h4>Detalles del Nombre: ${nombre}</h4>
        <p><strong>Longitud:</strong> ${longitud}</p>
        <p><strong>Comparación con el promedio:</strong> ${longitudComparacion}</p>
        <p><strong>Es el nombre más:</strong> ${tipoNombre}</p>
        <p><strong>Número de vocales:</strong> ${numVocales}</p>
      </div>
    `;
    
    document.getElementById('contenedorInformacion').innerHTML = detalles;
}

// Función para contar las vocales en un nombre
function contarVocales(nombre) {
    let vocales = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < nombre.length; i++) {
        if (vocales.indexOf(nombre[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}

// Función para generar y mostrar la tabla de alumnos
function mostrarTabla() {
    let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th><th>Detalles</th></tr></thead><tbody>";
    
    // Recorrer el array de alumnos y agregar una fila por cada nombre
    for (let i = 0; i < alumnos.length; i++) {
        let nombre = alumnos[i];
        if (nombresInvertidos) {
            nombre = nombre.split('').reverse().join(''); // Invertir el nombre si es necesario
        }
        texto += `
        <tr>
            <td>${i + 1}</td>
            <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${nombre}</td>
            <td><button class="eliminar" onclick="eliminarAlumno(${i})">Eliminar</button></td>
            <td><button onclick="mostrarDetalles(${i})">Ver Detalles</button></td>
        </tr>`;
    }

    // Añadir las estadísticas de los nombres
    let promedioLongitud = calcularPromedioLongitud();
    let nombreMasCorto = obtenerNombreMasCorto();
    let nombreMasLargo = obtenerNombreMasLargo();

    texto += `  
    <tr>
        <td colspan="4">Número total de alumnos: ${alumnos.length}</td>
    </tr>
    <tr>
        <td colspan="4">Promedio de la longitud de los nombres: ${promedioLongitud.toFixed(2)}</td>
    </tr>
    <tr>
        <td colspan="4">Número de letras del nombre más corto: ${nombreMasCorto}</td>
    </tr>
    <tr>
        <td colspan="4">Número de letras del nombre más largo: ${nombreMasLargo}</td>
    </tr>`;

    texto += "</tbody></table>";
    
    // Insertar la tabla generada en el contenedor de la tabla
    document.getElementById('tablaContainer').innerHTML = texto;
}

function editarAlumno(index) {
    alumnoSeleccionado = index;
    document.getElementById('nombreAlumno').value = alumnos[index];
    document.getElementById('btnGuardar').style.display = 'none';
    document.getElementById('btnModificar').style.display = 'inline-block';
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function modificarAlumno() {
    let nuevoNombre = document.getElementById('nombreAlumno').value.trim();
    if (nuevoNombre !== "" && alumnoSeleccionado !== null) {
        alumnos[alumnoSeleccionado] = nuevoNombre;
        mostrarTabla();
        cancelarEdicion();
    }
}

function cancelarEdicion() {
    alumnoSeleccionado = null;
    document.getElementById('nombreAlumno').value = '';
    document.getElementById('btnGuardar').style.display = 'inline-block';
    document.getElementById('btnModificar').style.display = 'none';
    document.getElementById('btnCancelar').style.display = 'none';
}


// Función para calcular el promedio de la longitud de los nombres
function calcularPromedioLongitud() {
    if (alumnos.length === 0) return 0;

    let totalLongitud = 0;
    for (let i = 0; i < alumnos.length; i++) {
        totalLongitud += alumnos[i].length;
    }
    return totalLongitud / alumnos.length;
}

// Función para obtener el número de letras del nombre más corto
function obtenerNombreMasCorto() {
    if (alumnos.length === 0) return 0;

    let minLongitud = alumnos[0].length;
    for (let i = 1; i < alumnos.length; i++) {
        if (alumnos[i].length < minLongitud) {
            minLongitud = alumnos[i].length;
        }
    }
    return minLongitud;
}

// Función para obtener el número de letras del nombre más largo
function obtenerNombreMasLargo() {
    if (alumnos.length === 0) return 0;

    let maxLongitud = alumnos[0].length;
    for (let i = 1; i < alumnos.length; i++) {
        if (alumnos[i].length > maxLongitud) {
            maxLongitud = alumnos[i].length;
        }
    }
    return maxLongitud;
}

// Función para reemplazar todos los nombres
function reemplazarTodos() {
    let nombreBuscar = document.getElementById('nombreBuscar').value.trim();
    let nombreReemplazar = document.getElementById('nombreReemplazar').value.trim();

    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i] === nombreBuscar) {
            alumnos[i] = nombreReemplazar; // Reemplazar el nombre en la lista
        }
    }
    mostrarTabla(); // Mostrar la tabla actualizada
}

// Función para reemplazar paso a paso
function buscarYReemplazar() {
    let nombreBuscar = document.getElementById('buscarNombrePaso').value;
    let contenedorReemplazos = document.getElementById('contenedorReemplazos');
    contenedorReemplazos.innerHTML = ''; // Limpiar el contenedor

    let indices = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].includes(nombreBuscar)) {
            indices.push(i);
        }
    }
    
    if (indices.length === 0) {
        contenedorReemplazos.innerHTML = '<p>No se encontraron coincidencias.</p>';
        return;
    }
    
    let indexActual = 0;
    mostrarReemplazo(indexActual);

    function mostrarReemplazo(index) {
        contenedorReemplazos.innerHTML = `
            <div class="reemplazar-item">
                <span>Coincidencia en índice ${indices[index]}: ${alumnos[indices[index]]}</span>
                <input type="text" id="nuevoNombre" placeholder="Nuevo nombre" />
                <button onclick="reemplazar(${indices[index]})">Reemplazar</button>
                <button onclick="saltar()">Saltar</button>
            </div>
        `;
    }

    window.reemplazar = function (indice) {
        let nuevoNombre = document.getElementById('nuevoNombre').value;
        if (nuevoNombre !== "") {
            alumnos[indice] = nuevoNombre;
            mostrarTabla();
        }
        avanzar();
    };

    window.saltar = function () {
        avanzar();
    };

    function avanzar() {
        indexActual++;
        if (indexActual < indices.length) {
            mostrarReemplazo(indexActual);
        } else {
            contenedorReemplazos.innerHTML = '<p>Reemplazo completado.</p>';
            mostrarTabla();
        }
    }
}


// Función para reemplazar un nombre paso a paso
function reemplazar(index, nombreBuscar) {
    let nuevoNombre = prompt('Ingrese el nuevo nombre:');
    if (nuevoNombre) {
        alumnos[index] = alumnos[index].replace(nombreBuscar, nuevoNombre);
        mostrarTabla(); // Actualizar la tabla
    }
}

// Función para saltar un nombre paso a paso
function saltar(index) {
    mostrarTabla(); // Solo mostrar la tabla sin cambios
}

// Función para invertir los nombres
function invertirNombres() {
    nombresInvertidos = !nombresInvertidos; // Alternar entre verdadero y falso
    if (nombresInvertidos) {
        document.getElementById('btnInvertirNombres').textContent = "Mostrar Nombres Normales";
    } else {
        document.getElementById('btnInvertirNombres').textContent = "Invertir Nombres";
    }
    mostrarTabla(); // Mostrar la tabla con los cambios aplicados
}

// Función para comprobar si se presionó Enter
function comprobarEnter(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (alumnoSeleccionado === null) {
            agregarAlumno();
        } else {
            modificarAlumno();
        }
    }
}

// Asignar el evento de manera explícita
document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="text"]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                var inputValue = event.target.value;
                if (inputValue !== "") {
                    ejecutarAccion(event.target.id);
                    event.target.value = ""; // Limpiar el campo después de la acción
                }
            }
        });
    }
});

function ejecutarAccion(inputId) {
    if (document.getElementById(inputId).value === "") {
        return;
    }
    switch (inputId) {
        case 'nombreAlumno':
            if (alumnoSeleccionado === null) {
                agregarAlumno();
            } else {
                modificarAlumno();
            }
            break;
        case 'buscarAlumno':
            buscarAlumno();
            break;
        case 'nombreBuscar':
        case 'nombreReemplazar':
            reemplazarTodos();
            break;
        case 'buscarNombrePaso':
            buscarYReemplazar();
            break;
    }
}

// Función para buscar un alumno en la lista
function buscarAlumno() {
    let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase();
    if (nombreBusqueda !== "") {
        let conteo = 0;
        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].toLowerCase() === nombreBusqueda) {
                conteo++;
            }
        }
        if (conteo > 0) {
            document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
        } else {
            document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
        }
    } else {
        document.getElementById('resultadoBusqueda').textContent = "";
    }
}
