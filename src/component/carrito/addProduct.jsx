import { Button, Container } from "@chakra-ui/react";
import Card from "./card"
import { useDispatch } from 'react-redux'

 const ListOfProduct =( addproduct, addProductCart)={
 
  return (
     <>
     <Container maxW="container.xl" mt="5">
       <Heading mt="3">Productos</Heading>
       <Input mt="3" w="full"
       placeholder="ingrese el nombre del producto"
       variant="filled" onKeyDown={handleOnKeyPress}></Input>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
       

       
        {products.map((data) => (
          <>
          <Box
            bg={useColorModeValue("white", "gray.800")}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
          >
            <Box p="6">
              <Box d="flex" alignItems="baseline"></Box>

              <Flex mt="1" justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                  addProduct={addProduct}
                >
                  <Box h50>
                    <Image m="auto" src={data.url}>
                      {data.attributes.url}
                    </Image>{" "}
                  </Box> 
                  
                 
                  
                  <p key={data.id}>{data.attributes.title}</p> 
                </Box>
                <Tooltip
                  label="Add to cart"
                  bg="white"
                  placement={"top"}
                  color={"gray.800"}
                  fontSize={"1.2em"}
                >
                  <chakra.a href={"#"} display={"flex"}>
                    <Icon
                      as={FiShoppingCart}
                      h={7}
                      w={7}
                      alignSelf={"center"}
                    />
                  </chakra.a>
                </Tooltip>
                
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                <Box
                  fontSize="2xl"
                  color={useColorModeValue("gray.800", "white")}
                >
                  <Box as="span" color={"gray.600"} fontSize="lg">
                    $
                  </Box>
                </Box>
              </Flex>
            <Button colorScheme="blue" px={"100px"} onClick={()=>addProductCart(data)}>
              Add to card
            </Button>
            </Box>
            </Box>
        
     
       </>
       
       )) }   
       )  </>
        }
export default ListOfProduct;