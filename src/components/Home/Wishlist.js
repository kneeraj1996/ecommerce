import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "./ProductCard";
import { addProductToWishlist, removeProductFromWishlist } from "../../utils/wishlistSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlistProducts = useSelector(
    (store) => store.wishlist.wishlistProducts,
  );
  const onHeartPressed = (item) => {
    const isExist = wishlistProducts.some((data) => data.id == item.id);

    if (isExist) {
      dispatch(removeProductFromWishlist(item));
    } else {
      dispatch(addProductToWishlist(item));
    }
  };

  return (
    <div className="text-sm md:text-base">
        <h3 className="flex justify-center text-lg md:text-4xl my-5 bg-gradient-to-r from-amber-400 mx-10 rounded-md text-purple-600">
        My Wishlist
      </h3>
        <div className="flex flex-wrap mt-5">
        {wishlistProducts.length?
        wishlistProducts.map((item, index) => {
            return (
            <ProductCard
                wishlistProducts={wishlistProducts}
                onHeartPressed={onHeartPressed}
                key={index + ""}
                item={item}
            />
            );
        }): 
        <div className="h-96 w-full justify-center items-center flex">
             <FontAwesomeIcon icon={faHeart} className="text-3xl mr-1 text-red-500" />
            <h1 className="text-lg md:text-3xl font-bold">Wishlist is empty.</h1>
        </div>   
            }
        </div>
    </div>
  );
};

export default Wishlist;
