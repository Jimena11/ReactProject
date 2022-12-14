import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { TiShoppingCart } from "react-icons/ti";
import { useCart } from "../context/CartContext";
const CartWidget = () => {
  const { clear } = useCart();

  return (
    <div>
      {/* <TiShoppingCart style={{ fontSize: "35px" }} /> */}
      <Menu>
        <MenuButton as={IconButton} icon={<TiShoppingCart />} />
        <MenuList>
          <MenuItem onClick={() => clear()}>Vaciar carrito</MenuItem>
          <MenuItem as="a" href="/cart">
            Finalizar compra
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default CartWidget;
