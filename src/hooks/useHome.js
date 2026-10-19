import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../utils/productSlice";

const useHome = () => {
  const dispatch = useDispatch();
  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        if (res && res.products.length) {
          dispatch(addProducts(res.products));
        }
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
};

export { useHome };
