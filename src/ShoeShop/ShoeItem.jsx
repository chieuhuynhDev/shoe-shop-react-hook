import React from "react";

export default function ShoeItem(props) {
  const { item } = props;
  console.log("🚀 ~ ShoeItem ~ item:", item);

  return (
    <div className="col-3  border border-secondary rounded">
      <img className="w-100 " src={item.image} alt="" />

      <button className="btn btn-success">Add</button>
    </div>
  );
}
