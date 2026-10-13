import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetail from "./components/Product/ProductDetail";
import { Header } from "./components/Common/Header";
import Cart from "./components/Product/Cart";

export default function Body() {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Cart />
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
          path: "/perfume/:perfumeId",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter}></RouterProvider>;
}
