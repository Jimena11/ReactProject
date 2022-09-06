const productoFalso = {
  id: 1,
  nombre: "Humus de garbanzo",
  descripcion: "Humus de garbanzo refinado extra con un toque de pimientos",
  imageUrl:
    "https://images.unsplash.com/photo-1622040805736-e2b922967ee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  precio: 400,
};

export const obtenerProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productoFalso);
    }, 2000);
  });
};
