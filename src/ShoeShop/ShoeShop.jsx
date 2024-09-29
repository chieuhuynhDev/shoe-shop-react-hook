import React from "react";

import Carts from "./Carts";
import ListShoe from "./ListShoe";

export default function ShoeShop() {
  return (
    <div>
      <div className="row align-items-start ms-0">
        <ListShoe />
        <Carts />
      </div>
    </div>
  );
}
