import { conexionAPI } from "./conexionAPI.js";

export default async function crearProducto(evento) {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const imagen = document.querySelector("[data-imagen]").value;

  try {
    await conexionAPI.enviarProductos(nombre, precio, imagen);
  } catch (e) {
    alert(e);
  }
}
