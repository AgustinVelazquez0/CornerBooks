// Agrega un evento de clic al botón "Add comment"
document.getElementById("agregarComentarioBtn").addEventListener("click", function() {
    // Obtiene el valor de nombre y comentario
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentarioInput").value;

    // Crea un nuevo elemento de comentario
    var nuevoComentario = document.createElement("div");
    nuevoComentario.className = "comentario"; // Utiliza la clase correcta para el estilo

    // Crea un elemento para el nombre del comentario
    var nombreElement = document.createElement("label");
    nombreElement.className = "nombreLabel"; // Clase para el estilo del nombre
    nombreElement.textContent = "Name: " + nombre; // Agrega el nombre al texto del elemento

    // Crea un elemento para el comentario
    var comentarioElement = document.createElement("div");
    comentarioElement.className = "comentarioTexto"; // Clase para el estilo del texto del comentario
    comentarioElement.textContent = comentario; // Agrega el comentario al texto del elemento

    // Agrega el nombre y el comentario al nuevo comentario
    nuevoComentario.appendChild(nombreElement);
    nuevoComentario.appendChild(comentarioElement);

    // Agrega el nuevo comentario al contenedor de comentarios
    document.getElementById("comentariosPublicados").appendChild(nuevoComentario);

    // Limpiar los campos después de agregar el comentario
    document.getElementById("nombre").value = "";
    document.getElementById("comentarioInput").value = "";
});
