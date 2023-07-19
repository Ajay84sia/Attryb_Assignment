import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDealFun } from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { marketData } = useSelector((store) => store.marketplaceReducer);

  console.log(marketData);

  useEffect(() => {
    dispatch(getDealFun());
  }, []);

  return (
    <Box style={{ width: "100%" }}>
      <HStack p={"120px"}>
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

      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          width: "90%",
          margin: "auto",
          paddingBottom: "50px",
        }}
      >
        {" "}
        {marketData &&
          marketData.map((el) => {
            return (
              <Box
                key={el._id}
                style={{
                  textAlign: "left",
                  borderRadius: "10px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  paddingBottom: "10px",
                }}
              >
                <Image
                  src={el.imageURL}
                  alt={el.title}
                  width={"100%"}
                  height={"250px"}
                  borderTopLeftRadius="10px"
                  borderTopRightRadius="10px"
                  marginBottom={"10px"}
                />
                <Text marginLeft={"20px"} style={{ fontWeight: "bold" }}>
                  Title : {el.title}
                </Text>
                <Text marginLeft={"20px"}>Model : {el.model}</Text>
                <Text marginLeft={"20px"}>
                  Manufacturer : {el.manufacturer}
                </Text>
                <Text marginLeft={"20px"}>Year : {el.year}</Text>
                <Text marginLeft={"20px"}>Mileage : {el.mileage} Km/L</Text>
                <Text marginLeft={"20px"}>Price : ₹ {el.price} /-</Text>
                <Button marginLeft={"150px"} marginTop={"10px"}>
                  {" "}
                  <Link to={`/deal/${el?._id}`}>More Details</Link>
                </Button>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};

export default Home;
