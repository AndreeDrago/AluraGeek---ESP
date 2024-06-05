import crearProducto from "./crearProducto.js";
import mostrarProductos from "./mostrarProductos.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.querySelector(".formulario__limpiar");

botonLimpiar.addEventListener("click", (evento) => limpiarFormulario(evento));
formulario.addEventListener("submit", (evento) => crearProducto(evento));

mostrarProductos();

async function limpiarFormulario(evento) {
  evento.preventDefault();

  document.querySelector("[data-nombre]").value = "";
  document.querySelector("[data-precio]").value = "";
  document.querySelector("[data-imagen]").value = "";
}
