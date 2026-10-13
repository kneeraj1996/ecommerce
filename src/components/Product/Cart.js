import React, { useState } from "react";
import { ApplyCoupon, CartItem, EstimatedTotal } from "./index";

const Cart = () => {

  const [hasItem, setHasItem] = useState(true);

  return (
    <div className="fixed right-0 top-20 z-40 flex h-[calc(100vh-5rem)] w-3/12 min-w-64 max-w-sm flex-col overflow-hidden rounded-l-md bg-gradient-to-b from-amber-100 to-slate-50">
      <h1 className="m-5 shrink-0 font-medium">
        Your Cart ({hasItem ? 1 : 0}{" "}
        {hasItem && 1 === 1 ? "item" : "items"})
      </h1>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {hasItem ? (
        [{},{},{}].map((item, index) => (
        <CartItem item={item} key={index} />
        ))
      ) : (
        <p className="mx-5 mt-4 text-sm text-gray-600">Your cart is empty.</p>
      )}
        <ApplyCoupon />
      </div>
      <EstimatedTotal />
    </div>
  );
};

export default Cart;
