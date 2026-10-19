import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Product/ProductDetail";
import { Header } from "./components/Common/Header";
import Cart from "./components/Product/Cart";
import { ProfileView } from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleProfile } from "./utils/configSlice";

export default function Body() {
  const AppLayout = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { pathname } = useLocation();
    const showProfile = useSelector(store => store.config.visibleProfile);
    const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div>
        <Header
          isCartOpen={isCartOpen}
          onCartToggle={() => setIsCartOpen((isOpen) => !isOpen)}
        />
        <Outlet />
        {showProfile ? (
          <ProfileView onClose={() => dispatch(toggleVisibleProfile())} />
        ) : null}
        <Cart isOpen={isCartOpen} />
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
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/product/:productId",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}
