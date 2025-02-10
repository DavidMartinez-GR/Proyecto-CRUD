################################# V1 #################################

lo que pide la v1
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


################################# V2 #################################









################################# V4 #################################
lo que pide la v4

    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno

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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
        // Recorrer el array de alumnos y agregar una fila por cada nombre
        for (let i = 0; i < alumnos.length; i++) {
            texto += `
            <tr>
                <td>${i + 1}</td>
                <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${alumnos[i]}</td>
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para comprobar si se presionó Enter
    function comprobarEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

 Agregar alumno: Al ingresar un nombre y hacer clic en Guardar (o presionar Enter), el alumno se agrega a la lista y la tabla se actualiza.
Editar alumno: Al hacer clic en un nombre de la tabla, ese nombre se carga en el campo de texto y se muestran los botones de Modificar y Cancelar.
Modificar alumno: Al hacer clic en Modificar, el nombre del alumno seleccionado se actualiza.
Cancelar: Si el usuario decide cancelar la edición, el campo de texto se limpia y los botones vuelven al estado inicial.



################################# V5 #################################
lo que pide la v5 

    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno

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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
        // Recorrer el array de alumnos y agregar una fila por cada nombre
        for (let i = 0; i < alumnos.length; i++) {
            texto += `
            <tr>
                <td>${i + 1}</td>
                <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${alumnos[i]}</td>
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para comprobar si se presionó Enter
    function comprobarEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

    // Función para buscar un alumno en la lista
    function buscarAlumno() {
        let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase(); // Obtener la búsqueda

        if (nombreBusqueda !== "") {
            let conteo = 0;
            // Contar cuántas veces aparece el nombre en la lista
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    conteo++;
                }
            }

            // Mostrar el resultado de la búsqueda
            if (conteo > 0) {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
            } else {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
            }
        } else {
            document.getElementById('resultadoBusqueda').textContent = ""; // Limpiar el resultado si no se ha escrito nada
        }
    }
    El usuario ingresa el nombre del alumno en el campo de búsqueda y presiona el botón "Buscar".
La función busca cuántas veces aparece el nombre en la lista y muestra el número de coincidencias.
Si no hay coincidencias, se muestra un mensaje indicando que no se encuentra en la lista.

################################# V6 #################################
lo que pide la v6
    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno

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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
        // Recorrer el array de alumnos y agregar una fila por cada nombre
        for (let i = 0; i < alumnos.length; i++) {
            texto += `
            <tr>
                <td>${i + 1}</td>
                <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${alumnos[i]}</td>
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para comprobar si se presionó Enter
    function comprobarEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

    // Función para buscar un alumno en la lista
    function buscarAlumno() {
        let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase(); // Obtener la búsqueda

        if (nombreBusqueda !== "") {
            let conteo = 0;
            // Contar cuántas veces aparece el nombre en la lista
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    conteo++;
                }
            }

            // Mostrar el resultado de la búsqueda
            if (conteo > 0) {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
            } else {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
            }
        } else {
            document.getElementById('resultadoBusqueda').textContent = ""; // Limpiar el resultado si no se ha escrito nada
        }
    }

    // Función para reemplazar todos los nombres en la lista
    function reemplazarTodos() {
        let buscarNombre = document.getElementById('buscarNombre').value.trim();
        let nuevoNombre = document.getElementById('nuevoNombre').value.trim();

        if (buscarNombre !== "" && nuevoNombre !== "") {
            let reemplazos = 0;

            // Reemplazar todas las ocurrencias del nombre buscado
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i] === buscarNombre) {
                    alumnos[i] = nuevoNombre;
                    reemplazos++;
                }
            }

            // Actualizar la tabla
            mostrarTabla();

            // Mostrar resultado del reemplazo
            if (reemplazos > 0) {
                document.getElementById('resultadoReemplazo').textContent = `Se han reemplazado ${reemplazos} ${reemplazos === 1 ? 'alumno' : 'alumnos'} por "${nuevoNombre}".`;
            } else {
                document.getElementById('resultadoReemplazo').textContent = `No se encontraron alumnos con el nombre "${buscarNombre}".`;
            }
        } else {
            document.getElementById('resultadoReemplazo').textContent = "Por favor, ingresa tanto el nombre a buscar como el nuevo nombre.";
        }
    }

################################# V7 #################################
lo que pide la V7

    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno
    let reemplazosPendientes = []; // Lista de reemplazos pendientes con índices

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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
        // Recorrer el array de alumnos y agregar una fila por cada nombre
        for (let i = 0; i < alumnos.length; i++) {
            texto += `
            <tr>
                <td>${i + 1}</td>
                <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${alumnos[i]}</td>
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para comprobar si se presionó Enter
    function comprobarEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

    // Función para buscar un alumno en la lista
    function buscarAlumno() {
        let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase(); // Obtener la búsqueda

        if (nombreBusqueda !== "") {
            let conteo = 0;
            // Contar cuántas veces aparece el nombre en la lista
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    conteo++;
                }
            }

            // Mostrar el resultado de la búsqueda
            if (conteo > 0) {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
            } else {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
            }
        } else {
            document.getElementById('resultadoBusqueda').textContent = ""; // Limpiar el resultado si no se ha escrito nada
        }
    }

    // Función para buscar y reemplazar paso a paso
    function buscarYReemplazar() {
        let nombreBusqueda = document.getElementById('buscarNombrePaso').value.trim().toLowerCase();

        if (nombreBusqueda !== "") {
            reemplazosPendientes = []; // Limpiar la lista de reemplazos pendientes
            let contenedorReemplazos = document.getElementById('contenedorReemplazos');
            contenedorReemplazos.innerHTML = ''; // Limpiar el contenedor antes de mostrar los resultados

            // Buscar las coincidencias
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    reemplazosPendientes.push(i); // Añadir el índice a los pendientes
                    // Mostrar las coincidencias y los botones de reemplazar y saltar
                    contenedorReemplazos.innerHTML += `
                        <div class="resultado">
                            <p>Encontrado en el índice ${i}: ${alumnos[i]}</p>
                            <button onclick="reemplazar(${i})">Reemplazar</button>
                            <button onclick="saltar(${i})">Saltar</button>
                        </div>
                    `;
                }
            }

            if (reemplazosPendientes.length === 0) {
                contenedorReemplazos.innerHTML = "<p>No se encontraron coincidencias para reemplazar.</p>";
            }
        }
    }

    // Función para reemplazar un alumno en el índice
    function reemplazar(index) {
        let nuevoNombre = prompt("Introduce el nuevo nombre:");

        if (nuevoNombre) {
            alumnos[index] = nuevoNombre;
            mostrarTabla(); // Actualizar la tabla
            document.getElementById('contenedorReemplazos').innerHTML = ''; // Vaciar el contenedor al terminar
        }
    }

    // Función para saltar un reemplazo
    function saltar(index) {
        // Eliminar el índice de los pendientes
        reemplazosPendientes = reemplazosPendientes.filter(i => i !== index);
        mostrarTabla(); // Actualizar la tabla
        document.getElementById('contenedorReemplazos').innerHTML = ''; // Vaciar el contenedor al terminar
    }


################################# V8 #################################

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Alumnos</title>
  <style>
    button {
      margin-top: 5px;
    }
    input {
      margin-bottom: 10px;
    }
    .resultado {
      margin-top: 10px;
      padding: 5px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h2>Gestión de Alumnos</h2>
  
  <input type="text" id="nombreAlumno" placeholder="Ingrese el nombre del alumno" />
  
  <button id="btnGuardar" onclick="agregarAlumno()">Guardar</button>
  <button id="btnModificar" onclick="modificarAlumno()" style="display:none;">Modificar</button>
  <button id="btnCancelar" onclick="cancelarEdicion()" style="display:none;">Cancelar</button>

  <p id="mensaje"></p>

  <h3>Buscar Alumno</h3>
  <input type="text" id="buscarAlumno" placeholder="Buscar por nombre" />
  <button onclick="buscarAlumno()">Buscar</button>
  <p id="resultadoBusqueda"></p>

  <h3>Reemplazar Paso a Paso</h3>
  <input type="text" id="buscarNombrePaso" placeholder="Nombre a buscar" />
  <button onclick="buscarYReemplazar()">Buscar y Reemplazar</button>
  
  <div id="contenedorReemplazos"></div>
  
  <div id="tablaContainer"></div>

  <script>
    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno
    let reemplazosPendientes = []; // Lista de reemplazos pendientes con índices

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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
        // Recorrer el array de alumnos y agregar una fila por cada nombre
        for (let i = 0; i < alumnos.length; i++) {
            texto += `
            <tr>
                <td>${i + 1}</td>
                <td onclick="editarAlumno(${i})" style="cursor:pointer; color:blue;">${alumnos[i]}</td>
                <td><button class="eliminar" onclick="eliminarAlumno(${i})">Eliminar</button></td>
            </tr>`;
        }

        // Añadir las estadísticas de los nombres
        let promedioLongitud = calcularPromedioLongitud();
        let nombreMasCorto = obtenerNombreMasCorto();
        let nombreMasLargo = obtenerNombreMasLargo();

        texto += `
        <tr>
            <td colspan="3">Promedio de la longitud de los nombres: ${promedioLongitud.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3">Número de letras del nombre más corto: ${nombreMasCorto}</td>
        </tr>
        <tr>
            <td colspan="3">Número de letras del nombre más largo: ${nombreMasLargo}</td>
        </tr>`;

        texto += "</tbody></table>";
        
        // Insertar la tabla generada en el contenedor de la tabla
        document.getElementById('tablaContainer').innerHTML = texto;
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para comprobar si se presionó Enter
    function comprobarEnter(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

    // Función para buscar un alumno en la lista
    function buscarAlumno() {
        let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase(); // Obtener la búsqueda

        if (nombreBusqueda !== "") {
            let conteo = 0;
            // Contar cuántas veces aparece el nombre en la lista
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    conteo++;
                }
            }

            // Mostrar el resultado de la búsqueda
            if (conteo > 0) {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
            } else {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
            }
        } else {
            document.getElementById('resultadoBusqueda').textContent = ""; // Limpiar el resultado si no se ha escrito nada
        }
    }
  </script>
</body>
</html>

################################# V9 #################################


<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Alumnos</title>
  <style>
    button {
      margin-top: 5px;
    }
    input {
      margin-bottom: 10px;
    }
    .resultado {
      margin-top: 10px;
      padding: 5px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <h2>Gestión de Alumnos</h2>
  
  <input type="text" id="nombreAlumno" placeholder="Ingrese el nombre del alumno" />
  
  <button id="btnGuardar" onclick="agregarAlumno()">Guardar</button>
  <button id="btnModificar" onclick="modificarAlumno()" style="display:none;">Modificar</button>
  <button id="btnCancelar" onclick="cancelarEdicion()" style="display:none;">Cancelar</button>

  <p id="mensaje"></p>

  <h3>Buscar Alumno</h3>
  <input type="text" id="buscarAlumno" placeholder="Buscar por nombre" />
  <button onclick="buscarAlumno()">Buscar</button>
  <p id="resultadoBusqueda"></p>

  <h3>Reemplazar Paso a Paso</h3>
  <input type="text" id="buscarNombrePaso" placeholder="Nombre a buscar" />
  <button onclick="buscarYReemplazar()">Buscar y Reemplazar</button>
  
  <div id="contenedorReemplazos"></div>
  
  <div id="tablaContainer"></div>

  <button id="btnInvertirNombres" onclick="invertirNombres()">Invertir Nombres</button>

  <script>
    let alumnos = []; // Array para almacenar los nombres de los alumnos
    let alumnoSeleccionado = null; // Para rastrear si estamos editando un alumno
    let reemplazosPendientes = []; // Lista de reemplazos pendientes con índices
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

    // Función para modificar un alumno
    function modificarAlumno() {
        let nuevoNombre = document.getElementById('nombreAlumno').value;
        
        if (nuevoNombre.trim() !== "") {
            alumnos[alumnoSeleccionado] = nuevoNombre; // Reemplazar el nombre en el array
            alumnoSeleccionado = null; // Restablecer la selección
            document.getElementById('nombreAlumno').value = ''; // Limpiar el campo
            document.getElementById('mensaje').textContent = `Alumno modificado correctamente.`;
            mostrarTabla(); // Actualizar la tabla
            mostrarBotonesGuardar(); // Restaurar el botón de guardar
        }
    }

    // Función para cancelar la edición
    function cancelarEdicion() {
        document.getElementById('nombreAlumno').value = ''; // Limpiar el campo de texto
        alumnoSeleccionado = null; // Restablecer la selección
        document.getElementById('mensaje').textContent = "Edición cancelada.";
        mostrarBotonesGuardar(); // Restaurar el botón de guardar
    }

    // Función para generar y mostrar la tabla de alumnos
    function mostrarTabla() {
        let texto = "<table><thead><tr><th>#</th><th>Nombre del Alumno</th><th>Acciones</th></tr></thead><tbody>";
        
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
            </tr>`;
        }

        // Añadir las estadísticas de los nombres
        let promedioLongitud = calcularPromedioLongitud();
        let nombreMasCorto = obtenerNombreMasCorto();
        let nombreMasLargo = obtenerNombreMasLargo();

        texto += `  
        <tr>
            <td colspan="3">Promedio de la longitud de los nombres: ${promedioLongitud.toFixed(2)}</td>
        </tr>
        <tr>
            <td colspan="3">Número de letras del nombre más corto: ${nombreMasCorto}</td>
        </tr>
        <tr>
            <td colspan="3">Número de letras del nombre más largo: ${nombreMasLargo}</td>
        </tr>`;

        texto += "</tbody></table>";
        
        // Insertar la tabla generada en el contenedor de la tabla
        document.getElementById('tablaContainer').innerHTML = texto;
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

    // Función para editar un alumno
    function editarAlumno(index) {
        // Cargar el nombre del alumno seleccionado en la caja de texto
        document.getElementById('nombreAlumno').value = alumnos[index];
        alumnoSeleccionado = index; // Marcar que estamos editando

        // Mostrar los botones de modificar y cancelar, ocultar el botón de guardar
        document.getElementById('btnModificar').style.display = 'inline';
        document.getElementById('btnCancelar').style.display = 'inline';
        document.getElementById('btnGuardar').style.display = 'none';
    }

    // Función para restaurar el botón de guardar
    function mostrarBotonesGuardar() {
        document.getElementById('btnGuardar').style.display = 'inline';
        document.getElementById('btnModificar').style.display = 'none';
        document.getElementById('btnCancelar').style.display = 'none';
    }

    // Función para invertir los nombres
    function invertirNombres() {
        nombresInvertidos = !nombresInvertidos; // Alternar entre verdadero y falso
        // Cambiar el texto del botón según el estado
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
            event.preventDefault(); // Evitar que el formulario se envíe al presionar Enter
            if (alumnoSeleccionado === null) {
                agregarAlumno(); // Si no estamos editando, agregamos el alumno
            } else {
                modificarAlumno(); // Si estamos editando, modificamos el alumno
            }
        }
    }

    // Asignar el evento de manera explícita
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

    // Función para buscar un alumno en la lista
    function buscarAlumno() {
        let nombreBusqueda = document.getElementById('buscarAlumno').value.trim().toLowerCase(); // Obtener la búsqueda

        if (nombreBusqueda !== "") {
            let conteo = 0;
            // Contar cuántas veces aparece el nombre en la lista
            for (let i = 0; i < alumnos.length; i++) {
                if (alumnos[i].toLowerCase() === nombreBusqueda) {
                    conteo++;
                }
            }

            // Mostrar el resultado de la búsqueda
            if (conteo > 0) {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" aparece ${conteo} ${conteo === 1 ? 'vez' : 'veces'} en la lista.`;
            } else {
                document.getElementById('resultadoBusqueda').textContent = `El nombre "${nombreBusqueda}" no se encuentra en la lista.`;
            }
        } else {
            document.getElementById('resultadoBusqueda').textContent = ""; // Limpiar el resultado si no se ha escrito nada
        }
    }
  </script>
</body>
</html>

################################# V10 #################################
lo que pide la V10

<!DOCTYPE html> 
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Alumnos</title>
  <style>
    button {
      margin-top: 5px;
    }
    input {
      margin-bottom: 10px;
    }
    .resultado {
      margin-top: 10px;
      padding: 5px;
      border: 1px solid #ddd;
      margin-bottom: 10px;
    }
    .informacion-detalle {
      margin-top: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      background-color: #f9f9f9;
    }
    .reemplazar-container {
      margin-top: 10px;
    }
    .reemplazar-item {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <h2>Gestión de Alumnos</h2>
  
  <input type="text" id="nombreAlumno" placeholder="Ingrese el nombre del alumno" />
  
  <button id="btnGuardar" onclick="agregarAlumno()">Guardar</button>
  <button id="btnModificar" onclick="modificarAlumno()" style="display:none;">Modificar</button>
  <button id="btnCancelar" onclick="cancelarEdicion()" style="display:none;">Cancelar</button>

  <p id="mensaje"></p>

  <h3>Buscar Alumno</h3>
  <input type="text" id="buscarAlumno" placeholder="Buscar por nombre" />
  <button onclick="buscarAlumno()">Buscar</button>
  <p id="resultadoBusqueda"></p>

  <h3>Reemplazar Todos</h3>
  <input type="text" id="nombreBuscar" placeholder="Nombre a reemplazar" />
  <input type="text" id="nombreReemplazar" placeholder="Nuevo nombre" />
  <button onclick="reemplazarTodos()">Reemplazar Todos</button>

  <h3>Reemplazar Paso a Paso</h3>
  <input type="text" id="buscarNombrePaso" placeholder="Nombre a buscar" />
  <button onclick="buscarYReemplazar()">Buscar y Reemplazar</button>
  
  <div id="contenedorReemplazos" class="reemplazar-container"></div>
  
  <div id="tablaContainer"></div>

  <button id="btnInvertirNombres" onclick="invertirNombres()">Invertir Nombres</button>

  <div id="contenedorInformacion"></div>

  <script>
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
        let nombreBuscar = document.getElementById('buscarNombrePaso').value.trim();
        let contenedorReemplazos = document.getElementById('contenedorReemplazos');
        contenedorReemplazos.innerHTML = ''; // Limpiar el contenedor

        for (let i = 0; i < alumnos.length; i++) {
            if (alumnos[i].includes(nombreBuscar)) {
                contenedorReemplazos.innerHTML += `
                <div class="reemplazar-item">
                    <span>En el índice ${i}: ${alumnos[i]}</span>
                    <button onclick="reemplazar(${i}, '${nombreBuscar}')">Reemplazar</button>
                    <button onclick="saltar(${i})">Saltar</button>
                </div>`;
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
    document.getElementById('nombreAlumno').addEventListener('keydown', comprobarEnter);

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
  </script>
</body>
</html>

