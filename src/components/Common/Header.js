import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibleProfile } from "../../utils/configSlice";

const Header = ({ isCartOpen, onCartToggle }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.products.cartItems);
  const totalQuantity = cartItems.length;
  console.log('cartItems======',cartItems)
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center bg-slate-50">
      <div className="flex p-5 gap-2 items-center">
        <FontAwesomeIcon
          className="text-blue-700 text-3xl"
          icon={faCartShopping}
        />
        <div className="flex text-xl font-bold gap-2">
          <h2 className="text-black text-2xl ">Shop</h2>
          <h2 className="text-blue-700 text-2xl ">Easy</h2>
        </div>
       
      </div>
       <div className="text-3xl ml-40 bg-gradient-to-r from-amber-200 text-purple-600">The Fragrance House</div>
      <div className="flex">
        <div 
          onClick={() => dispatch(toggleVisibleProfile())}
          className="flex items-center justify-center gap-2 p-5">
          <FontAwesomeIcon icon={faUser} />
          <h1 className="text-black">My Account</h1>
        </div>
        <div className="flex items-center justify-center gap-2 p-5">
          <FontAwesomeIcon icon={faHeart} />
          <h1 className="text-black">My Wishlist</h1>
        </div>
        <button
          type="button"
          onClick={onCartToggle}
          aria-expanded={isCartOpen}
          aria-controls="cart-view"
          className="flex items-center justify-center gap-2 py-5 pl-5 pr-10"
        >
          <span className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span
              aria-label={`${totalQuantity} ${totalQuantity === 1 ? "item" : "items"} in cart`}
              className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
            >
              {totalQuantity}
            </span>
          </span>
          <h1 className="text-black">My Cart</h1>
        </button>
      </div>
    </div>
  );
};

export { Header };
