import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  calculateActualPrice,
  capitalizeFirstLetter,
} from "../../utils/helper";
import { addCartItems } from "../../utils/productSlice";
const ProductCard = (props) => {
  const { item } = props;
  const { images, title, category, rating, price, discountPercentage, id } =
    item;
  const dispatch = useDispatch();

  return (
    <div className="w-80 h-auto mb-5 mx-3 rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer">
      <Link state={{ product: item }} to={`product/${title}-${id}`}>
        <FontAwesomeIcon
          onClick={() => alert("change")}
          icon={faHeart}
          className="absolute m-4 text-red-400"
        />
        {images.length ? (
          <img src={images[0]} className="h-2/3 w-full object-fit" />
        ) : null}
      </Link>

      <div className="p-2">
        <Link state={{ product: item }} to={`product/${title}-${id}`}>
          <div className="flex justify-between">
            <h2 className="text-amber-300">
              {capitalizeFirstLetter(category)}
            </h2>
            <div className="flex items-center bg-gray-400 px-2 rounded-xl">
              <FontAwesomeIcon icon={faStar} className="text-gray-300 h-3" />
              <h1 className="text-gray-300 text-sm">{rating}</h1>
            </div>
          </div>
          <h2 className="font-medium text-xl">
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
          className="bg-gradient-to-r from-amber-600 to-amber-300 p-2 rounded-lg text-white w-full mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export { ProductCard };
