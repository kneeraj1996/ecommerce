import Cart from './Cart';
import {Description, ProductUse, FAQ ,ProductInfo, ProductPhotos} from './index';

const ProductDetail = () => {

      const renderPerfumeAd = () => {
        return (
            <img
                src='https://www.themancompany.com/cdn/shop/files/Banner_2.jpg?v=1776797408&width=2400'
              className='rounded-xl'
            />
        )

    }

  return (
    <div className='p-10 bg-gradient-to-b from-amber-100'>
      <div className='flex w-full'>
        <ProductPhotos />
        <ProductInfo />
      </div>
      {renderPerfumeAd()}
      <Description />
      <ProductUse />
      <FAQ />
    </div>
  )
}

export default ProductDetail