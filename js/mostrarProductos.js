import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-productos]");

function crearCarta(nombre, precio, imagen, id) {
  const producto = document.createElement("li");
  producto.className = "producto__box";
  producto.innerHTML = `<div class="producto__box_contenido">
  <img
    src="${imagen}"
    alt="imagen del productro"
    class="imagen__producto"
  />
  <div class="producto__info">
  <p class="producto__nombre">${nombre}</p>
  <div class="producto__datos">
    <p class="producto__precio">$ ${precio}.00</p>
    <img
    src="./img/basura.png"
    alt="borrar"
    class="boton_borrar"
    id="${id}"
    data-borrar
  />
  </div>
  </div>
</div>`;

  return producto;
}

export default async function mostrarProductos() {
  try {
    const listaAPI = await conexionAPI.listarProductos();

    if (listaAPI.length === 0) {
      lista.innerHTML = `<h2 class="mensaje__titulo">No hay productos disponibles.</h2>`;
      return;
    }

    listaAPI.forEach((producto) =>
      lista.appendChild(
        crearCarta(
          producto.nombre,
          producto.precio,
          producto.imagen,
          producto.id
        )
      )
    );

    lista.addEventListener("click", (event) => {
      if (event.target && event.target.matches("[data-borrar]")) {
        const id = event.target.getAttribute("id");
        console.log("ID del elemento a borrar:", id);
        conexionAPI.borrarProductos(id);
      }
    });
  } catch {
    lista.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :( </h2>`;
  }
}
