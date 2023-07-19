import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFoundPage from "../Pages/NotFoundPage";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
