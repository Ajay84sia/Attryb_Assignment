import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name:"",
    email: "",
    password: "",
  });
  const handleSignup = (e) => {
    setForm((prev) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Box style={{ width: "100%" }}>
      <form
        onSubmit={handleFormSubmission}
        style={{
          width: "30%",
          margin: "auto",
          padding: "40px",
          // border: "1px solid red",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          marginTop: "100px",
          borderRadius: "20px",
        }}
      >
        <Heading>Signup Form</Heading>
        <br />
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            value={form.name}
            onChange={handleSignup}
            placeholder="Your Name"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={form.email}
            onChange={handleSignup}
            placeholder="Your Email"
          />
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            alue={form.password}
            onChange={handleSignup}
            placeholder="Your Password"
          />
        </FormControl>
        <br />
        <Button mt={4} colorScheme="teal" type="submit">
        Signup
        </Button>
      </form>
    </Box>
  );
};

export default Signup;
