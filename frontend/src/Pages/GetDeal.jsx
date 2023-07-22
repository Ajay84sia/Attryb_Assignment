import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMyDealFun,
  getMyDealFun,
} from "../Redux/marketplaceReducer/action";
import {
  Box,
  Button,
  HStack,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const GetDeal = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { myData, isLoading, isError } = useSelector(
    (store) => store.marketplaceReducer
  );

  const handleDelete = (id) => {
    dispatch(deleteMyDealFun(id)).then(() => {
      toast({
        title: "Data Delete Successfully",
        description: "",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      dispatch(getMyDealFun());
    });
  };

  useEffect(() => {
    dispatch(getMyDealFun());
  }, []);

  if (isLoading === true) {
    return (
      <>
        <Image
          src="https://i.stack.imgur.com/hzk6C.gif"
          alt="loading"
          margin="auto"
          paddingTop="90px"
          marginBottom="360px"
        />
      </>
    );
  }
  if (isError === true) {
    return (
      <>
        <Image
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
          alt="error"
          margin="auto"
          paddingTop="30px"
        />
      </>
    );
  }

  return (
    <Box style={{ paddingTop: "100px" }}>
      <HStack margin="20px" marginLeft="70%" gap="40px">
        <Link to="/adddeal">
          <Button colorScheme="teal" size="md">
            Add New Deal
          </Button>
        </Link>
        <Link to="/oem">
          <Button colorScheme="teal" size="md">
            OEM Details
          </Button>
        </Link>
      </HStack>

      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>S.No.</Th>
              <Th>Product Image</Th>
              <Th>Product Details</Th>
              <Th>Edit Product Details</Th>
              <Th>Remove Product</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myData?.map((el, i) => (
              <Tr key={i + 1}>
                <Td>{i + 1}.</Td>
                <Td>
                  {" "}
                  <Image src={el.imageURL} alt={el.title} width="100px" />
                </Td>
                <Td padding={"10px"}>
                  <Text marginBottom="10px">
                    Manufacturer : {el.manufacturer}
                  </Text>
                  <Text marginBottom="10px">Title : {el.title}</Text>
                  <Text marginBottom="10px">Model : {el.model}</Text>
                </Td>
                <Td>
                  <Link to={`/editDeal/${el?._id}`}>
                    <Button colorScheme="blue">
                      <EditIcon />
                    </Button>
                  </Link>
                </Td>
                <Td>
                  <Button
                    colorScheme="red"
                    onClick={() => handleDelete(el._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default GetDeal;
