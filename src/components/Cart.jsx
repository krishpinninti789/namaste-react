import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearCart } from "../utils/reduxSlices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-3 m-3 space-y-3">
      <h1 className="text-2xl font-bold">Cart Items</h1>
      <button
        className="rounded-xl bg-blue-950 text-white p-2 cursor-pointer"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      {cartItems.length === 0 ? (
        <h1 className="font-bold text-2xl text-center">
          Cart is empty , please add some items
        </h1>
      ) : (
        cartItems.map((itemData, index) => {
          return <ItemCard itemData={itemData} key={index} />;
        })
      )}
    </div>
  );
};

export default Cart;
