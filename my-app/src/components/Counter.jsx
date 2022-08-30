import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Counter = ({ stock, onAdd, min, sum, res }) => {
  const [count, setCount] = useState(min);

  function add() {
    if (count < stock) {
      setCount(count + sum);
    }
  }

  function substract() {
    if (count >= min) {
      setCount(count - res);
    }
  }

  function reset() {
    setCount(min);
  }

  return (
    <Flex
      className="counter-box"
      alignItems={"center"}
      flexDirection={"column"}
    >
      <p>Stock: {stock} </p>

      <Flex gap={2} mt={2} mb={2}>
        <Button
          colorScheme="teal"
          variant="solid"
          size={"xs"}
          onClick={substract}
        >
          -
        </Button>

        <span>{count}</span>

        <Button colorScheme="teal" variant="solid" size={"xs"} onClick={add}>
          +
        </Button>
      </Flex>

      <div>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => onAdd(count)}
        >
          Confirmar
        </Button>
      </div>
    </Flex>
  );
};

export default Counter;
