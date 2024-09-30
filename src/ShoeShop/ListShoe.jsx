import React from "react";
import { useSelector } from "react-redux";
import ShoeItem from "./ShoeItem";

export default function ListShoe() {
  const { dataShoe } = useSelector((state) => state.shoeShopReducer);

  return (
    <div className="row col-6">
      {dataShoe.map((item, index) => (
        <ShoeItem key={index} item={item} />
      ))}
    </div>
  );
}
