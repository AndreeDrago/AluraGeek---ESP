async function listarProductos() {
  const conexion = await fetch("http://localhost:3001/productos");

  const conexionConvertida = conexion.json();

  return conexionConvertida;

  // consoloe.log(conexionConvertida);
}

async function enviarProductos(nombre, precio, imagen) {
  const conexion = await fetch("http://localhost:3001/productos", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      nombre: nombre,
      precio: precio,
      imagen: imagen,
    }),
  });
  const conexionConvertida = conexion.json();

  if (!conexion.ok) {
    throw new Error("No se pudo agregar el producto");
  }
  return conexionConvertida;
}

async function borrarProductos(id) {
  const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
    method: "DELETE",
  });

  if (!conexion.ok) {
    throw new Error("No se pudo eliminar el producto");
  }
}

export const conexionAPI = {
  listarProductos,
  enviarProductos,
  borrarProductos,
};
