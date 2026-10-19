import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { ApplyCoupon, CartItem, EstimatedTotal } from "./index";
import { useSelector } from "react-redux";

const Cart = ({ isOpen }) => {
  const cartItems = useSelector((store) => store.products.cartItems);
  
  const totalQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0,
  );
  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="cart-view"
      className="fixed right-0 top-20 z-40 flex h-[calc(100vh-5rem)] w-3/12 min-w-64 max-w-sm flex-col overflow-hidden rounded-l-md bg-gradient-to-b from-amber-100 to-slate-50 shadow-[-8px_-8px_16px_rgba(0,0,0,0.15)] 
            animate-[slideLeft_0.5s_ease-out]"
    >
      <h1 className="m-5 shrink-0 font-medium">
        Your Cart ({totalQuantity} {totalQuantity === 1 ? "item" : "items"})
      </h1>
      <div className="min-h-0 flex-1 overflow-y-auto">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <div className="h-[100%] w-[100%]  flex justify-center  items-center">
            <FontAwesomeIcon icon={faCartShopping} />   
            <p className="mx-2 text-red-600 font-bold text-xl">Your cart is empty.</p>
          </div>
        )}
        {cartItems.length ? <ApplyCoupon /> : null}
      </div>
      {cartItems.length ? <EstimatedTotal cartItems={cartItems}/>: null}
    </div>
  );
};

export default Cart;
