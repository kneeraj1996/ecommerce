import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Product/ProductDetail";
import { Header } from "./components/Common/Header";
import Cart from "./components/Product/Cart";
import { ProfileView } from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, toggleVisibleProfile } from "./utils/configSlice";
import Wishlist from "./components/Home/Wishlist";
import OrderBookedSummary from "./components/Product/OrderBookedSummary";
import Auth from "./components/Auth/Auth";
import { auth } from "./utils/firebase";
import { signOut } from "firebase/auth";

export default function Body() {
  const AppLayout = () => {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { pathname } = useLocation();
    const showProfile = useSelector(store => store.config.visibleProfile);
    const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const onPressedLogout = () => {
       dispatch(removeUser())
       dispatch(toggleVisibleProfile());
       signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
       navigate('/');
    }

    return (
      <div className="text-sm md:text-base">
        <Header
          isCartOpen={isCartOpen}
          onCartToggle={() => setIsCartOpen((isOpen) => !isOpen)}
        />
        <div aria-hidden="true" className="h-24 md:h-16 lg:h-20" />
        <Outlet />
        {showProfile ? (
          <ProfileView 
            removeUser={onPressedLogout}
            onClose={() => dispatch(toggleVisibleProfile())} />
        ) : null}
        <Cart isOpen={isCartOpen} onCartToggle={() => setIsCartOpen((isOpen) => !isOpen)} />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
         {
          path: "/",
          element: <Auth />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
         {
          path: "/wishlist/product/:productId",
          element: <ProductDetail />,
        },
        {
          path: "/orderBooked",
          element: <OrderBookedSummary />,
        },
        {
          path: "/wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}
