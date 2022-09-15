import {
  Flex,
  Circle,
  Box,
  Image,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import Counter from "./Counter";

const data = {
  isNew: true,
  imageURL:
    "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  name: "Nombre del Producto",
  price: 1200,
  rating: 4.2,
  numReviews: 34,
};

function ProductCard({ producto }) {
  return (

    <Flex p={25} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="md"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && (
          <Circle
            size="10px"
            position="absolute"
            top={2}
            right={2}
            bg="red.200"
          />
        )}

        <Image
          src={producto.imageUrl}
          height="200px"
          alt={`Picture of ${data.name}`}
          roundedTop="lg"
        />

        <Box p="6">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Link href={`/item/${producto.id}`} >{producto.nombre}</Link>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              <Box as="span" color={"gray.600"} fontSize="lg">
                $
              </Box>
              {producto.precio.toFixed(2)}
            </Box>
          </Flex>
          <Counter stock={producto.cantidad} onAdd={() => {}} min={1} sum={1} res={1} />
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCard;
