import { useSelector, useDispatch } from "react-redux";
import { useHome } from "../../hooks/useHome";
import {
  Banner,
  Header,
  ShippingLabels,
  ProductCard,
  BestSellerBanner,
ProfileView,
} from "./index";
import OwnerIntro from "./OwnerIntro";
import { TrustUs } from "./TrustUs";
import { addProductToWishlist, removeProductFromWishlist } from "../../utils/wishlistSlice";
function Home() {
  useHome();
  const dispatch = useDispatch();
  const products = useSelector(store => store.products.products);
  const wishlistProducts = useSelector(store => store.wishlist.wishlistProducts);
  console.log('products====',products)
  console.log('wishlistProducts========',wishlistProducts)

  const onHeartPressed = (item) => {
    const isExist = wishlistProducts.some((data) => data.id == item.id);
    
    if(isExist) {
      dispatch(removeProductFromWishlist(item))
    }
    else {
      dispatch(addProductToWishlist(item))
    }
  }

  return (
    <div className="bg-slate-50 h-full">
      {/* <ProfileView /> */}
      <Banner />
      <ShippingLabels />
      <h3 className="flex justify-center  my-5 bg-gradient-to-r from-amber-400 mx-10 rounded-md text-purple-600 text-xl md:text-4xl">
        Collection
      </h3>
      <div className="flex flex-wrap md:justify-center ">
        {products.map((item, index) => {
          return <ProductCard 
          key={index+''}
          wishlistProducts={wishlistProducts} onHeartPressed={onHeartPressed}  key={index+''} item={item} />;
        })}
        <BestSellerBanner />
        <OwnerIntro />
        <TrustUs />
      </div>
       
    </div>
  );
}

export default Home;
