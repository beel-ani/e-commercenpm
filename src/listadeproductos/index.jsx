import { data } from "./Product";
import { Container, Flex, Heading, Input } from "@chakra-ui/react";
import Card from "./card";
import create from 'zustand/middlewere'



const ListOfProduct = ({ addProduct }) => {

  
const addProduct= create((set,get)=>( {
  cart : [],
const [products,setProducts]=useState([]){
 addProduct: (product) => {
    const existProduct = cart.some((products)=>products.id === product.id);
    if (!existProduct){
      set((state)=>({
        cart:[...state.cart,product],
      }));
    }
  },


}}))
  return (
    <Container maxW="container.xl" mt="5">
      <Heading mt="3">Product</Heading>
      <Input
        mt="3"
        m="full"
        placeholder="Ingrese el nombre del Producto"
        variant="filled"
      ></Input>
      <Flex flexWrap="wrap" justifyContent="space-around">
        {data.map((data) => (
          <Card
            product={data}
            addProduct={addProduct}
            key={`productCard${data.id}`}
          ></Card>
        ))}
      </Flex>
      <Button colorScheme="blue" px={"100px"} onClick={()=>addProduct(data)}></Button>
    </Container>
  );
};
export default ListOfProduct;
