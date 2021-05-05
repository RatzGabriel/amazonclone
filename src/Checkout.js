import React from "react";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue;
  return <div className="checkout"></div>;
}

export default Checkout;
