import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const ProductCard = () => {
    return (
        <div className='w-80 h-auto mb-5 mx-3 rounded-lg overflow-hidden bg-white shadow-lg cursor-pointer'>
                <img
                    src="https://www.adilqadri.com/cdn/shop/files/WhatsApp_Image_2025-07-27_at_12.25.44_AM.jpg?v=1761140681"
                    className='h-2/3 w-full object-fit'
                />
                <div className='p-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-gray-300'>ATTAR</h2>
                        <div className='flex items-center bg-gray-400 px-2 rounded-xl'>
                            <FontAwesomeIcon icon={faStar} className='text-gray-300 h-3' />   
                            <h1 className='text-gray-300 text-sm'>4.7 | 10398</h1>
                        </div>
                    </div>
                    <h2 className='font-medium text-xl'>Shanaya Luxury Attar Perfume</h2>
                    <div className='flex items-end'>
                        <div className='flex items-end'>
                            <h2 className='font-medium text-xl mr-2'>₹399</h2>
                            <h1 className="line-through text-sm" >₹599</h1>
                        </div>
                        <div className='bg-green-300 rounded-sm text-sm text-white w-16 h-5 text-center ml-2'>
                            33% off
                        </div>
                    </div>
                    <button  className="bg-gradient-to-r from-amber-600 to-amber-300 p-2 rounded-lg text-white w-full mt-3">
                        Add to Cart
                    </button>
                </div>

        </div>
    )

}

export {ProductCard};