import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMyproducts, selectCart } from "./productSlice";
const MyTest = () => {
  const cart = useSelector(selectCart);
  return <div>MyTest - {cart.length}</div>;
};

export default MyTest;
