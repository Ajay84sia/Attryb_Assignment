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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getColorDealFun,
  getDealFun,
  getMileageDealFun,
  getPriceDealFun,
  getSearchDealFun,
} from "../Redux/marketplaceReducer/action";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { marketData, isLoading, isError } = useSelector(
    (store) => store.marketplaceReducer
  );

  const handleReset = () => {
    dispatch(getDealFun());
  };

  const handleSortByPrice = (value) => {
    dispatch(getPriceDealFun(value));
  };

  const handleSortByMileage = (value) => {
    dispatch(getMileageDealFun(value));
  };

  const handleFilterByColor = (value) => {
    dispatch(getColorDealFun(value));
  };

  const handleSearch = (value) => {
    dispatch(getSearchDealFun(value));
  };

  useEffect(() => {
    dispatch(getDealFun());
  }, []);

  return (
    <Box style={{ width: "100%" }}>
      <HStack paddingTop={"120px"} marginBottom={"30px"} paddingLeft={"40px"} paddingRight={"40px"}>
        <Select
          onChange={(e) => handleSortByPrice(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select
          onChange={(e) => handleSortByMileage(e.target.value)}
        >
          <option value="">Sort by Mileage</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </Select>
        <Select
          onChange={(e) => handleFilterByColor(e.target.value)}
        >
          <option value="">Filter by Color</option>
          <option value="red">Red</option>
          <option value="silver">Silver</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="yellow">Yellow</option>
        </Select>
        <Input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Car"
        />
      </HStack>
      <Button marginBottom={"30px"} onClick={handleReset}>Reset All Filters</Button>

      {isLoading === true ? (
        <>
          <Image
            src="https://i.stack.imgur.com/hzk6C.gif"
            alt="loading"
            margin="auto"
            paddingTop="90px"
            marginBottom="360px"
          />
        </>
      ) : isError === true ? (
        <>
          <Image
            src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
            alt="error"
            margin="auto"
            width="45%"
          />
        </>
      ) : (
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
      )}
    </Box>
  );
};

export default Home;
