import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Dealer = () => {
  return (
    <Box style={{ paddingTop: "300px", width: "100%" }}>
      <HStack style={{ marginLeft: "550px", gap: "30px" }}>
        <Link to="/adddeal">
          <Button colorScheme="teal" size="md">
            Add New Deal
          </Button>
        </Link>
        <Link to="/getdeal">
          <Button colorScheme="teal" size="md">
            Get My Deals
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};

export default Dealer;
