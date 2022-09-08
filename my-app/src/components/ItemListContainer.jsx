import { SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { obtenerProductos, obtenerProductosPorCategoria } from "../services/mocks";
import ProductCard from "./ProductCard";

const ItemListContainer = () => {
  const {categoria} = useParams()
  const location = useLocation()
  
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)

    if(location.pathname.includes('category')) {
      obtenerProductosPorCategoria(categoria).then((productos) => {
        setProductos(productos)
        setCargando(false)})
    } else {
      obtenerProductos().then((productos) => {
        setProductos(productos)
        setCargando(false)})
    }

    
  }, [categoria, location.pathname])
  
  if(cargando) return <Text>Cargando...</Text>
  if(!cargando && productos.length === 0) return <Text>No hay productos</Text>

  return (
    <SimpleGrid columns={3}>
    { productos.map(producto => <ProductCard producto={producto} />) }
    </SimpleGrid>
    
  );
};

export default ItemListContainer;
