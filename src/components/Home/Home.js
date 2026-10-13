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
  return (
    <div className="bg-slate-50 h-full">
      {/* <ProfileView /> */}
      <Banner />
      <ShippingLabels />
      <h3 className="flex justify-center text-4xl my-5 bg-gradient-to-r from-amber-400 mx-10 rounded-md text-purple-600">
        Collection
      </h3>
      <div className="flex flex-wrap justify-center">
        {[{}, {}, {}, {}, {}, {}, {}, {}].map(() => {
          return <ProductCard />;
        })}
        <BestSellerBanner />
        <OwnerIntro />
        <TrustUs />
      </div>
       
    </div>
  );
}

export default Home;
