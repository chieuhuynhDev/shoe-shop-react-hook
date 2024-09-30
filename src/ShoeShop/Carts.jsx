import React from "react";
import { useSelector } from "react-redux";

export default function Carts(props) {
  let { cart } = useSelector((state) => state.shoeShopReducer);
  let renderTable = () => {
    return cart.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.name}</td>
          <td>
            <img width={100} src={item.image} alt="" />
          </td>
          <td>{item.price}</td>
          <td>
            <button className="btn btn-warning">-</button>
            <strong className="mx-2">{item.total}</strong>
            <button className="btn btn-primary">+</button>
          </td>
          <td>
            <button className="btn btn-dark">Delete</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="col-6">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{renderTable()}</tbody>
      </table>
      {cart.length === 0 && (
        <h3 className="text-center">No items to display</h3>
      )}
    </div>
  );
}
