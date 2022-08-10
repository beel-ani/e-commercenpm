import { Flex, Box, Image, useColorModeValue, Button } from "@chakra-ui/react";

import React from "react-dom";
useEffect(() => {
  fetch(
    "https://strapiecommerce-production-ed2c.up.railway.app/api/products?populate=*"
  )
    .then((res) => res.json())
    .then(({ data }) => setProducts(data));
}, []);

const Card = ({ data, addProduct }) => {
  return (
    <Flex
      p={5}
      w="full"
      maxW="350px"
      m="10px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
      bg={useColorModeValue("white", "gray.800")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
    >
      <Box h="50%">
        <Image
          m="auto"
          src={data.image}
          alt={`Picture of ${data.title}`}
          roundedTop="lg"
          h="full"
          objectFit="cover"
        />
      </Box>
      <Box p="6">
        <Box
          fontSize="2xl"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {data.title}
        </Box>

        <Flex justifyContent="space-between" alignContent="center">
          <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
            <Box as="span" color={"gray.600"} fontSize="lg">
              $
            </Box>
            {data.price}
          </Box>
        </Flex>
      </Box>
      <Button w="full" onClick={() => addProduct(data)}>
        Agregar al carrito
      </Button>
    </Flex>
  );
};
export default Card;
