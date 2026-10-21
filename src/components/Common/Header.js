import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from "react-router-dom";
import {
  faCartShopping,
  faShoppingCart,
  faUser,
  faHeart
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  removeUser,
  toggleVisibleProfile,
} from "../../utils/configSlice";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Header = ({ isCartOpen, onCartToggle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const cartItems = useSelector((store) => store.products.cartItems);
  const user = useSelector((store) => store.config.user);
  const wishlistProducts = useSelector(
    (store) => store.wishlist.wishlistProducts,
  );
  const totalQuantity = cartItems.length;
  console.log("cartItems======", cartItems);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user coming nee====", user);
      if (user && user.displayName) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
        if (pathname === "/") {
          navigate("/home", { replace: true });
        }
      } else {
        dispatch(removeUser());
        if (pathname !== "/") {
          navigate("/", { replace: true });
        }
      }
    });

    //  unsubscribe when component will unmount
    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate, pathname]);

  return (
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-y-1 bg-gradient-to-b from-orange-300 to-orange-100 px-3 py-2 sm:px-4 md:relative md:flex-nowrap md:px-5 md:py-0">
      <div className="order-1 flex items-center gap-2 md:p-3 lg:p-5">
        <FontAwesomeIcon
          className="text-2xl text-blue-700 md:text-3xl"
          icon={faCartShopping}
        />

        <div className="flex gap-1 text-lg font-bold md:gap-2 md:text-xl">
          <h2 className="text-black">Shop</h2>
          <h2 className="text-blue-700">Easy</h2>
        </div>
      </div>
      <div className="order-3 w-full text-center text-sm font-bold sm:text-base md:absolute md:left-1/2 md:top-1/2 md:order-2 md:w-auto md:-translate-x-1/2 md:-translate-y-1/2 md:text-lg lg:text-3xl">
        The Fragrance House
      </div>

      <div
        className={`order-2 flex items-center gap-1 md:order-3 md:gap-0 ${user && user.displayName ? "" : "invisible"}`}
      >
        <div
          onClick={() => dispatch(toggleVisibleProfile())}
          className="flex cursor-pointer items-center justify-center gap-2 p-2 md:p-3 lg:p-5"
        >
          <FontAwesomeIcon icon={faUser} />
          <h1 className="hidden cursor-pointer text-sm text-black lg:block">
            My Account
          </h1>
        </div>
        <Link to={"/wishlist"}>
          <div className="flex items-center justify-center gap-2 p-2 md:p-3 lg:p-5">
            <span className="relative">
              <FontAwesomeIcon icon={faHeart} className="text-black" />
              {wishlistProducts.length ? (
                <span
                  aria-label={`${totalQuantity} ${totalQuantity === 1 ? "item" : "items"} in cart`}
                  className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
                >
                  {wishlistProducts.length}
                </span>
              ) : null}
            </span>
            <h1 className="hidden cursor-pointer text-sm text-black lg:block">
              My Wishlist
            </h1>
          </div>
        </Link>
        <button
          type="button"
          onClick={onCartToggle}
          aria-expanded={isCartOpen}
          aria-controls="cart-view"
          className="flex items-center justify-center gap-2 p-2 md:p-3 lg:px-5 lg:py-5"
        >
          <span className="relative">
            <FontAwesomeIcon icon={faShoppingCart} />
            {totalQuantity != 0 ? (
              <span
                aria-label={`${totalQuantity} ${totalQuantity === 1 ? "item" : "items"} in cart`}
                className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white"
              >
                {totalQuantity}
              </span>
            ) : null}
          </span>
          <h1 className="hidden cursor-pointer text-sm text-black lg:block">
            My Cart
          </h1>
        </button>
      </div>
    </div>
  );
};

export { Header };
