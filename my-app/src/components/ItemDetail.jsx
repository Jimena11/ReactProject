import { Box, Heading } from "@chakra-ui/react"

const ItemDetail = ({ cargando, producto }) => {
  if(cargando) {
    return <div>Cargando...</div>
  } else {
    return <Box>
      <Heading>{producto?.nombre}</Heading>
      <Heading size="md">{producto?.descripcion}</Heading>
      <img width="300px" src={producto?.imageUrl} alt={producto?.descripcion}></img>
      <Heading size="md">${producto?.precio}</Heading>
    </Box>
  }
}

export default ItemDetail