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
import { addCartItems, adjustCartQuantity } from "../../utils/productSlice";

const ProductDetail = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const product = state?.product;
  const { images, description, thumbnail } = product;
  console.log("product coming===", product);

  const addItemToCart = () => {
    dispatch(addCartItems(product));
  };

  const removeItemFromCart = () => {
    dispatch(adjustCartQuantity({ id: product.id, amount: -1 }));
  }

  const renderPerfumeAd = (thumbnail) => {
    return (
      <img
        src={
          "https://www.themancompany.com/cdn/shop/files/Banner_2.jpg?v=1776797408&width=2400"
        }
        alt=""
        className="mt-5 w-full rounded-xl object-cover"
      />
    );
  };

  return (
    <div className="bg-gradient-to-b from-amber-100 p-4 sm:p-6 lg:p-10">
      <div className="flex w-full flex-col gap-4 md:flex-row md:gap-0">
        <ProductPhotos images={images} />
        <ProductInfo
          info={product}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </div>
      {renderPerfumeAd(thumbnail)}
      <div className="mt-6">
        <Description description={description} />
        <ProductUse />
        <FAQ />
      </div>
    </div>
  );
};

export default ProductDetail;
