import React, { useEffect } from "react";
import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOemFun } from "../Redux/oemReducer/action";

const Oem = () => {
  const dispatch = useDispatch();
  const { oemData, isLoading, isError } = useSelector(
    (store) => store.oemReducer
  );

  useEffect(() => {
    dispatch(getOemFun());
  }, []);
  return (
    <>
      <HStack style={{ paddingTop: "120px" , margin:"20px", marginLeft:"40%", gap:"400px"}}>
        <Heading>OEM Details</Heading>
        <Link to="/getdeal">
          <Button colorScheme="teal" size="md">
            Go Back
          </Button>
        </Link>
      </HStack>

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
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "30px",
            width: "90%",
            margin: "auto",
            marginTop: "30px",
            paddingBottom: "50px",
          }}
        >
          {" "}
          {oemData &&
            oemData?.map((el) => {
              return (
                <Box
                  key={el._id}
                  style={{
                    textAlign: "left",
                    borderRadius: "10px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    padding: "20px",
                    overflow: "hidden",
                  }}
                >
                  <HStack>
                    {" "}
                    <Image
                      src={el.imageURL}
                      alt={el.title}
                      width={"35%"}
                      height={"100%"}
                      borderRadius="10px"
                      marginBottom={"10px"}
                    />
                    <Box>
                      <Text marginLeft={"20px"} style={{ fontWeight: "bold" }}>
                        Title : {el.title}
                      </Text>
                      <Text marginLeft={"20px"}>Model : {el.model}</Text>
                      <Text marginLeft={"20px"}>
                        Manufacturer : {el.manufacturer}
                      </Text>
                      <Text marginLeft={"20px"}>Year : {el.year}</Text>
                      <Text marginLeft={"20px"}>
                        Mileage : {el.mileage} Km/L
                      </Text>
                      <Text marginLeft={"20px"}>
                        Price : ₹ {el.originalPrice} /-
                      </Text>
                      <Text marginLeft={"20px"}>Power : {el.power} Kw</Text>
                      <Text marginLeft={"20px"}>
                        Max Speed : {el.maxSpeed} KM/h
                      </Text>
                      <Text marginLeft={"20px"}>
                        {" "}
                        <ul
                          style={{
                            listStyleType: "none",
                            display: "flex",
                            gap: "30px",
                          }}
                        >
                          Available Colors :
                          {el.availableColors?.map((color, i) => {
                            return (
                              <li
                                key={i}
                                style={{
                                  backgroundColor: color,
                                  border: "2px dotted teal",
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                }}
                              >
                                {" "}
                                &nbsp;
                              </li>
                            );
                          })}
                        </ul>
                      </Text>
                      <Text marginLeft={"20px"}>
                        Description : {el.description}
                      </Text>
                    </Box>
                  </HStack>
                </Box>
              );
            })}
        </Box>
      )}
    </>
  );
};

export default Oem;
