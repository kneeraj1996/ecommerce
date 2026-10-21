import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCircleCheck,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Labels from "./Labels";
import {
  calculateActualPrice,
  capitalizeFirstLetter,
} from "../../utils/helper";
import { useMemo } from "react";

const ProductInfo = (props) => {
  const { addItemToCart, removeItemFromCart } = props;
  const cartItems = useSelector((store) => store.products.cartItems);
  const {
    title,
    category,
    tags,
    description,
    brand,
    reviews,
    rating,
    price,
    discountPercentage,
    id,
  } = props.info;
  const renderPerfumeFeature = () => {
    return (
      <div className="my-5 flex w-full justify-around gap-2 rounded-xl border-2 border-amber-400 px-2 py-3 text-center text-xs text-black sm:text-sm md:text-xs lg:text-xl">
        <div className="flex min-w-0 flex-col items-center">
          <img className="h-10 w-10 object-contain sm:h-12 sm:w-12" src="https://cdn.shopify.com/s/files/1/1188/2592/files/Premium_Oils.png" />
          <h1>Premium Oils</h1>
        </div>
        <div className="flex min-w-0 flex-col items-center">
          <img className="h-10 w-10 object-contain sm:h-12 sm:w-12" src="https://cdn.shopify.com/s/files/1/1188/2592/files/affordable_luxury.png" />
          <h1>Affordable Luxury</h1>
        </div>
        <div className="flex min-w-0 flex-col items-center">
          <img className="h-10 w-10 object-contain sm:h-12 sm:w-12" src="https://cdn.shopify.com/s/files/1/1188/2592/files/Long_Lasting.png" />
          <h1>Long Lasting</h1>
        </div>
      </div>
    );
  };

  const getCount = useMemo(() => {
    let data = (cartItems.filter((item) => item.id == id));
    return data.length? data[0].quantity: 0;
  },[cartItems])


  console.log(" props.info=====", props.info);
  return (
    <div className="w-full min-w-0 bg-white px-4 py-4 text-base sm:px-6 md:w-1/2 md:px-5 md:py-3 md:text-base lg:px-10 lg:text-lg">
      <h1 className="text-sm sm:text-base">{capitalizeFirstLetter(category)}</h1>
      <h1 className="break-words text-xl font-bold sm:text-2xl">{capitalizeFirstLetter(title)}</h1>
      <h1>{description}</h1>
      <Labels tags={tags} />
      <div className="flex flex-wrap items-center">
        <FontAwesomeIcon icon={faStar} className="text-amber-500 h-3" />
        <h1 className="font-bold">{rating}</h1>
        <h1 className="pl-1">| {reviews.length} Verified reviews</h1>
        <FontAwesomeIcon icon={faCircleCheck} className="text-blue-500 h-3" />
      </div>
      <div className="bg-green-100 w-24 py-2 mt-3 justify-center align-middle flex rounded-md">
        <h1 className="text-green-400 text-sm">{discountPercentage}% OFF</h1>
      </div>
      <div className="mt-3 flex items-end">
        <h1 className="text-2xl font-bold text-black sm:text-3xl">₹{price}</h1>
        <h1 className="text-xl line-through text-gray-300 pl-2">
          ₹{calculateActualPrice(price, discountPercentage)}
        </h1>
      </div>
      <h1 className="text-black">Inclusive of all taxes</h1>
      {
        getCount == 0?
        <div
        onClick={() => addItemToCart()}
        className="flex w-full cursor-pointer justify-between rounded-xl bg-black px-4 py-4 text-base text-white sm:px-7 md:w-full lg:w-3/4"
      >
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCartShopping} className="text-white" />
          <h1 className="pl-1">ADD TO CART</h1>
        </div>
        <h1>|</h1>
        <h1>₹{price}</h1>
      </div>:
      <div className="h-20 bg-black rounded-md text-white flex text-3xl">
        <button
            onClick={removeItemFromCart}
            disabled={getCount == 1}
            className="w-[20%] justify-center items-center leading-none disabled:cursor-not-allowed disabled:text-gray-300">
            -
        </button>
        <div className="w-[60%] flex justify-center items-center">
            {getCount}
        </div>
        <button
            onClick={addItemToCart}
            className="w-[20%] justify-center items-center"
        >
            +
        </button>
      </div>}
      {renderPerfumeFeature()}
    </div>
  );
};

export default ProductInfo;
