import {
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";
import card from "./listadeproductos/card";

const Cart = ({ cart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        Carrito({cart.lenght})
      </Button>{" "}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>carrito</DrawerHeader>
          {cart.lenght || (
            <DrawerBody>
              <Text>no hay productos en el carrito </Text>
            </DrawerBody>
          )}
          {cart.length && (
            <>
              <DrawerBody>
                {cart.map((product) => (
                  <Product product={product} key={`cartProduct${data.id}`} />
                ))}
              </DrawerBody>
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Text>Total:{total}</Text>
                <Button colorScheme="blue">Save </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};
