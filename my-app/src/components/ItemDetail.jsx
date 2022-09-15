import { Box, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useCart } from "../context/CartContext"
import Counter from "./Counter"

const ItemDetail = ({ cargando, producto }) => {
  const {addItem} = useCart()
  
  const onAdd = (count) => {
    addItem(producto, count)
  }

  if(cargando) {
    return <div>Cargando...</div>
  } else {
    return <Box>
      <Heading>{producto?.nombre}</Heading>
      <Heading size="md">{producto?.descripcion}</Heading>
      <img width="300px" src={producto?.imageUrl} alt={producto?.descripcion}></img>
      <Heading size="md">${producto?.precio}</Heading>

      <Counter stock={producto?.cantidad} onAdd={onAdd} min={1} sum={1} res={1} />
    </Box>
  }
}

export default ItemDetail