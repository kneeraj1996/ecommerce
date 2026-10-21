import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faRecycle,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";


const ShippingLabels = () => {
    return (
        <div className='flex items-center justify-center md:justify-around mb-5'>
            <div className="flex mr-5 items-center">
                <div className='rounded-full mr-5 h-16 w-16 border-s-2 border-blue-300 bg-white justify-center  items-center flex'>
                    <FontAwesomeIcon 
                        icon={faTruckFast}
                    />
                </div>
                <h1 className="text-black">Free Shipping</h1>
            </div>
            <div className="flex mr-5 items-center">
                <div className='rounded-full mr-5 h-16 w-16 border-s-2 border-blue-300 bg-white justify-center  items-center flex'>
                    <FontAwesomeIcon 
                        icon={faRecycle}
                    />
                </div>
                <h1 className="text-black">Easy Returns</h1>
            </div>
            <div className="flex mr-5 items-center invisible md:visible w-0 md:w-auto">
                <div className='rounded-full mr-5 h-16 w-16 border-s-2 border-blue-300 bg-white justify-center  items-center flex'>
                    <FontAwesomeIcon 
                        icon={faMoneyBillWave}
                    />
                </div>
                <h1 className="text-black">COD Available</h1>
            </div>
            <div className="flex mr-5 items-center invisible md:visible   w-0 md:w-auto">
                <div className='rounded-full mr-5 h-16 w-16 border-s-2 border-blue-300 bg-white justify-center  items-center flex'>
                    <FontAwesomeIcon 
                        icon={faTruckFast}
                    />
                </div>
                <h1 className="text-black">Secure Payments</h1>
            </div>
            
        </div>
    )
}

export { ShippingLabels };