import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart,  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateActualPrice,
  capitalizeFirstLetter,
} from "../../utils/helper";
import { addCartItems } from "../../utils/productSlice";
const ProductCard = (props) => {
  const { item, onHeartPressed, wishlistProducts } = props;
  const { images, title, category, rating, price, discountPercentage, id } =
    item;
  const dispatch = useDispatch();
   const isExist = wishlistProducts.some((data) => data.id == id);
  const productPath = `/product/${id}`;

  return (
    <div className="w-full md:w-80 h-auto mb-5 mx-3 rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer">
         <FontAwesomeIcon
          onClick={() => onHeartPressed(item)}
          icon={faHeart}
          className={`absolute m-4 ${isExist? 'text-red-500': 'text-gray-300'} cursor-pointer`}
        />
      <Link state={{ product: item }} to={productPath}>
        {images.length ? (
          <img src={images[0]} className="h-2/3 w-full object-fit" />
        ) : null}
      </Link>

      <div className="p-2">
        <Link state={{ product: item }} to={productPath}>
          <div className="flex justify-between">
            <h2 className="text-amber-300">
              {capitalizeFirstLetter(category)}
            </h2>
            <div className="flex items-center bg-gray-400 px-2 rounded-xl text-sm md:text-sm">
              <FontAwesomeIcon icon={faStar} className="text-gray-300 h-3" />
              <h1 className="text-gray-300 text-sm">{rating}</h1>
            </div>
          </div>
          <h2 className="font-medium text-lg md:text-xl">
            {capitalizeFirstLetter(title)}
          </h2>
          <div className="flex items-end">
            <div className="flex items-end">
              <h2 className="font-medium text-xl mr-2">₹{price}</h2>
              <h1 className="line-through text-sm">
                ₹{calculateActualPrice(price, discountPercentage)}
              </h1>
            </div>
            <div className="bg-green-300 rounded-sm text-sm text-white w-20 h-5 text-center ml-2">
              {discountPercentage}% off
            </div>
          </div>
        </Link>
        <button
          onClick={() => dispatch(addCartItems(item))}
          className=" bg-gradient-to-r from-amber-600 to-amber-300 p-2 rounded-lg text-white w-full mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
