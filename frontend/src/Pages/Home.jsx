import { Box, HStack, Input, Select } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDealFun } from "../Redux/marketplaceReducer/action";

const Home = () => {
  const dispatch = useDispatch();
  const { marketData } = useSelector((store) => store.marketplaceReducer);

  console.log(marketData);

  useEffect(() => {
    dispatch(getDealFun());
  }, []);

  return (
    <Box>
      <HStack>
        <Select placeholder="Select Sortby">
          <option value="price">Price</option>
          <option value="mileage">Mileage</option>
        </Select>
        <Select placeholder="Select order">
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select placeholder="Select color">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Input type="text" />
      </HStack>

      <Box></Box>
    </Box>
  );
};

export default Home;
