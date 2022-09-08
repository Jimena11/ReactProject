const categorias = [
  { id: 1, nombre: "Comidas" },
  { id: 2, nombre: "Congelados" },
  { id: 3, nombre: "Bebidas" },
  { id: 4, nombre: "Almacén" },
];

const productos = [
  {
    id: 1,
    nombre: "Humus de garbanzo",
    descripcion: "Humus de garbanzo refinado extra con un toque de pimientos",
    imageUrl:
      "https://images.unsplash.com/photo-1641913768248-68be0a7f339a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80",
    precio: 400,
    idCategoria: 1,
  },
  {
    id: 2,
    nombre: "Leche de palta",
    descripcion: "Leche de palta hass",
    imageUrl:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80",
    precio: 200,
    idCategoria: 3,
  },
  {
    id: 3,
    nombre: "Leche de almendras",
    descripcion: "Leche de almendras de la india",
    imageUrl:
      "https://images.unsplash.com/photo-1615485737457-f07082c77813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    precio: 340,
    idCategoria: 3,
  },
  {
    id: 4,
    nombre: "Harina de papaya",
    descripcion: "Harina de papaya con currillos",
    imageUrl:
      "https://images.unsplash.com/photo-1627735483792-233bf632619b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    precio: 340,
    idCategoria: 4,
  },
];

export const obtenerCategorias = () => {
  return categorias;
};

export const obtenerProductosPorCategoria = (categoria) => {
  const categoriaEncontrada = categorias.find(
    (cat) => cat.nombre === categoria
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter(
          (producto) => producto.idCategoria === categoriaEncontrada.id
        )
      );
    }, 2000);
  });
};

export const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const obtenerProducto = (id) => {
  const producto = productos.find((producto) => producto.id === +id);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(producto);
    }, 2000);
  });
};
