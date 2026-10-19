import Cart from "./Cart";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Description,
  ProductUse,
  FAQ,
  ProductInfo,
  ProductPhotos,
} from "./index";
import { addCartItems } from "../../utils/productSlice";

const ProductDetail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const product = state?.product;
  const { images, description, thumbnail, reviews } = product;
  console.log("product coming===", product);
  const addItemToCart = () => {
    dispatch(addCartItems(product));
  };

  const renderPerfumeAd = (thumbnail) => {
    return (
      <img
        src={
          "https://www.themancompany.com/cdn/shop/files/Banner_2.jpg?v=1776797408&width=2400"
        }
        className="rounded-xl "
      />
    );
  };

  return (
    <div className="p-10 bg-gradient-to-b from-amber-100">
      <div className="flex w-full">
        <ProductPhotos images={images} />
        <ProductInfo info={product} addItemToCart={addItemToCart} />
      </div>
      {renderPerfumeAd(thumbnail)}
      <Description description={description} />
      <ProductUse />
      <FAQ />
    </div>
  );
};

export default ProductDetail;
