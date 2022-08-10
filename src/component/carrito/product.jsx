import Box, { Image, Flex, Text, Heading, IconButton } from "@chakra-ui/react";
import BsFillTrashFill from "@react-icons/bs";
import { useDispatch } from "react-redux";
const Products = ({ dispatch, deleteProduct }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchListOfProduct(
        "https://strapiecommerce-production-ed2c.up.railway.app/api/products?populate=*"
      )
    );
    // Safe to add dispatch to the dependencies array
  }, [dispatch]);

  return (
    <>
      <Flex mt="5">
        <Image
          src={dispatch.image}
          w="70px"
          objectFit="cover"
          alt={`Imagen de producto${dispatch.name}`}
        />
        <Box>
          <Heading size="sm">{dispatch.name}</Heading>
          <Text>{data.price}</Text>
        </Box>
        <IconButton
          icon={<BsFillTrashFill />}
          onClick={() => deleteProduct(dispatch)}
        ></IconButton>
      </Flex>
    </>
  );
};
export default Products;
