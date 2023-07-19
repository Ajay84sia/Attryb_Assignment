import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import NotFound from "../Pages/NotFound";
import AddDeal from "../Pages/AddDeal";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route
          path="/adddeal"
          element={
            <PrivateRoute>
              <AddDeal />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
