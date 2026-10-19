import { useSelector } from "react-redux";
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
function Home() {
  useHome();
  
  const products = useSelector(store => store.products.products);
  console.log('products====',products)
  return (
    <div className="bg-slate-50 h-full">
      {/* <ProfileView /> */}
      <Banner />
      <ShippingLabels />
      <h3 className="flex justify-center text-4xl my-5 bg-gradient-to-r from-amber-400 mx-10 rounded-md text-purple-600">
        Collection
      </h3>
      <div className="flex flex-wrap justify-center">
        {products.map((item, index) => {
          return <ProductCard key={index+''} item={item} />;
        })}
        <BestSellerBanner />
        <OwnerIntro />
        <TrustUs />
      </div>
       
    </div>
  );
}

export default Home;
