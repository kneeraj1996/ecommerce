import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { calculateActualPrice } from "../../utils/helper";
import { adjustCartQuantity, removeCartItem } from "../../utils/productSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, images, discountPercentage, quantity } = item;
  return (
    <div
      className="mx-5 mt-2 rounded-md bg-white p-3 shadow-lg"
    >
      <div className="flex justify-between">
        <div className="flex">
          {images.length ? (
            <img
              src={images[0]}
              alt="Black perfume, 100ml"
              className="h-16 w-16 rounded-md"
            />
          ) : null}
          <h2 className="ml-2 text-lg font-medium">{title}</h2>
        </div>
        <div className="text-xs">
          <p className="text-gray-300 line-through">
            ₹{calculateActualPrice(price, discountPercentage)}
          </p>
          <p>₹{price}</p>
          <p className="text-green-300">({discountPercentage}% Off)</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="text-sm font-medium text-gray-700">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => dispatch(adjustCartQuantity({ id, amount: -1 }))}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="h-8 w-8 rounded border border-gray-300 text-lg leading-none disabled:cursor-not-allowed disabled:text-gray-300"
          >
            −
          </button>
          <span className="min-w-4 text-center text-sm" aria-live="polite">
            {quantity || 1}
          </span>
          <button
            type="button"
            onClick={() => dispatch(adjustCartQuantity({ id, amount: 1 }))}
            aria-label="Increase quantity"
            className="h-8 w-8 rounded border border-gray-300 text-lg leading-none"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Remove item from cart"
            title="Remove item from cart"
            onClick={() => dispatch(removeCartItem(id))}
            className="ml-1 flex h-8 w-8 items-center justify-center rounded text-red-600 hover:bg-red-50"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
