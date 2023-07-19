import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      width={"100%"}
      py={4}
      px={4}
      boxShadow="xl"
      position="fixed"
      bgColor={"white"}
      top={"0"}
      zIndex={"10"}
    >
      <Box>
        <Link to="/">
          <Heading>BUYC</Heading>
        </Link>
      </Box>
      <Flex justifyContent={"space-around"} width={"50%"} spacing={10}>
        <Link to="/signup">
          <Button colorScheme="teal" size="md">
            Sign Up
          </Button>
        </Link>
        <Link to="/signin">
          <Button colorScheme="teal" size="md">
            Sign In
          </Button>
        </Link>

        <Link to="/dealer">
          <Button colorScheme="teal" size="md">
            Dealer Section
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
