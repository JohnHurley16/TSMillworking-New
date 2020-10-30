import React from "react";
import { Link } from "react-router-dom";
import cartData from "../data/Cart/cart-data.json";

const CartMenu = () => (
  <li className="dropdown">
    <a href="!#" onClick={e => e.preventDefault()} className="dropdown-toggle" data-toggle="dropdown">
      <i className="icofont icofont-cart"></i>
      <span className="badge">{cartData.length}</span>
    </a>
    <ul className="dropdown-menu cart-list">
      {cartData.map((item) => (
        <li key={item.id}>
          <a href="!#" onClick={e => e.preventDefault()} className="photo">
            <img
              src={require("../assets/images/" + item.photo)}
              className="cart-thumb"
              alt=""
            />
          </a>
          <h6>
            <a href="!#" onClick={e => e.preventDefault()}>{item.name} </a>
          </h6>
          <p>
            {item.qty}x -
            <span className="price">{item.currency + item.price}</span>
          </p>
        </li>
      ))}
      <li className="total">
        <span className="pull-right">
          <strong>Total</strong>: $0.00
        </span>
        <Link to={`${process.env.PUBLIC_URL}/shop-cart`} className="btn btn-default btn-cart">
          Cart
        </Link>
      </li>
    </ul>
  </li>
);

export default CartMenu;
