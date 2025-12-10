/* ============================================================
   NUEVA FUNCIÓN – Agregar imágenes dinámicas a la galería
============================================================ */

const inputImagen = document.getElementById("inputImagen");
const btnAgregarImagen = document.getElementById("btnAgregarImagen");
const galeria = document.getElementById("galeria");

btnAgregarImagen.addEventListener("click", function () {

  const url = inputImagen.value.trim();

  if (url === "") {
    alert("Por favor ingresa una URL válida.");
    return;
  }

  // Crear columna para Bootstrap
  const col = document.createElement("div");
  col.classList.add("col-md-4");

  // Crear imagen
  const img = document.createElement("img");
  img.src = url;
  img.alt = "Imagen agregada por el usuario";
  img.classList.add("img-fluid", "rounded", "shadow");

  // Insertar imagen dentro de la columna
  col.appendChild(img);

  // Insertar columna dentro de la galería
  galeria.appendChild(col);

  // Limpiar input
  inputImagen.value = "";
});

