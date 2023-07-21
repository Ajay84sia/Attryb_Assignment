import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMyDealFun,
  editMyDealFun,
  getMyDealFun,
} from "../Redux/marketplaceReducer/action";
import {
  Box,
  Button,
  Center,
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

const GetDeal = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const { myData } = useSelector((store) => store.marketplaceReducer);

  const handleEdit = (id) => {
    dispatch(editMyDealFun(id,newData))
  };

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

  return (
    <Box style={{ paddingTop: "120px" }}>
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
                <Td>
                  <Text marginBottom="5px">
                    Manufacturer : {el.manufacturer}
                  </Text>
                  <Text marginBottom="5px">Title : {el.title}</Text>
                </Td>
                <Td>
                  <Button colorScheme="blue" onClick={() => handleEdit(el._id)}>
                    <EditIcon />
                  </Button>
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
