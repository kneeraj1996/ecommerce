import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCircleCheck, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Labels from './Labels';
import { calculateActualPrice, capitalizeFirstLetter } from '../../utils/helper';
import { addCartItems } from '../../utils/productSlice';

const ProductInfo = (props) => {
    const dispatch = useDispatch();
    const { addItemToCart } = props;

    const { title, category, tags, description, brand, reviews, rating, price, discountPercentage, id
  } = props.info;
    const renderPerfumeFeature = () => {

        return (
            <div className='border-2 border-amber-400 py-3 px-3 my-5 rounded-xl w-full text-xl text-black flex justify-around'>
                <div className='flex flex-col items-center'>
                    <img
                        src='https://cdn.shopify.com/s/files/1/1188/2592/files/Premium_Oils.png'
                    />
                    <h1>Premium Oils</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img
                        src='https://cdn.shopify.com/s/files/1/1188/2592/files/affordable_luxury.png'
                    />
                    <h1>Affordable Luxury</h1>
                </div>
                <div className='flex flex-col items-center'>
                    <img
                        src='https://cdn.shopify.com/s/files/1/1188/2592/files/Long_Lasting.png'
                    />
                    <h1>Long Lasting</h1>
                </div>
               

            </div>
        )

    }

console.log(' props.info=====', props.info)
  return (
    <div className='text-lg w-1/2 min-w-0 px-10 py-3 bg-white'>
        <h1 >{capitalizeFirstLetter(category)}</h1>
        <h1 className='font-bold'>{capitalizeFirstLetter(title)}</h1>
        <h1 >{description}</h1>
        <Labels tags={tags} />
        <div className='flex items-center'>
            <FontAwesomeIcon icon={faStar} className='text-amber-500 h-3' />   
            <h1 className='font-bold'>{rating}</h1>
            <h1 className='pl-1'>| {reviews.length} Verified reviews</h1>
            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-500 h-3' />   
        </div>
        <div className='bg-green-100 w-24 py-2 mt-3 justify-center align-middle flex rounded-md'>
            <h1 className='text-green-400 text-sm'>{discountPercentage}% OFF</h1>
        </div>
        <div className='flex mt-3 items-end'>
            <h1 className='text-3xl text-black font-bold'>₹{price}</h1>
             <h1 className='text-xl line-through text-gray-300 pl-2'>₹{calculateActualPrice(price,discountPercentage)}</h1>
        </div>
        <h1 className='text-gray-100'>Inclusive of all taxes</h1>
        <div 
        onClick={() => addItemToCart()}
        className='flex w-3/4 bg-black text-white justify-between py-5 px-7 rounded-xl text-lg'>
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCartShopping} className='text-white' />   
                <h1 className='pl-1'>ADD TO CART</h1>
            </div>
            <h1>|</h1>
            <h1>₹{price}</h1>
        </div>
        {renderPerfumeFeature()}
    </div>
  )
}

export default ProductInfo;