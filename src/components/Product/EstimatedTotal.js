import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faCaretDown,
  faCaretUp,
  faShippingFast,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const COUPON_DISCOUNT = 5;

const EstimatedTotal = (props) => {
  const { cartItems } = props;
  const [showFull, setShowFull] = useState(false);
  const couponCodeSaved = useSelector((store) => store.products.couponCode);

  const calculateItemsTotal = () => {

    let sum = 0;
    let price = cartItems.reduce((acc, obj) => {
      
      sum = sum + (obj.price * obj.quantity);

      return sum;

    },0)
    return price;
  }

  const calculateEstimateTotal = () => {
    let total = calculateItemsTotal();
    total = couponCodeSaved? total-COUPON_DISCOUNT: total;
    return total.toFixed(2);
  }

  const renderTotalAmount = () => {
    return (
      <div
        onClick={() => setShowFull(!showFull)}
        className="flex justify-between"
      >
        <div className="flex justify-center items-center">
          <FontAwesomeIcon icon={faIndianRupee} />
          <h1 className="mx-1 ">Estimated Total</h1>
          <FontAwesomeIcon icon={showFull? faCaretUp: faCaretDown} />
        </div>
        <h1 className="font-bold">₹{calculateEstimateTotal()}</h1>
      </div>
    );
  };

  const renderLabels = () => {
    return (
      <div className="flex justify-between mt-2">
        <div className="bg-green-100 text-green-400 flex items-center justify-center px-2 mr-3 rounded-md">
          <FontAwesomeIcon icon={faShippingFast} />
          <h1 className="ml-2 text-xs text-center">Free shipping included</h1>
        </div>
        <div className="bg-green-100 text-green-400 items-center flex justify-center px-2 rounded-md">
          <FontAwesomeIcon icon={faCheck} />
          <h1 className="ml-2 text-xs text-center">
            Save up to ₹5 on Order
          </h1>
        </div>
      </div>
    );
  };

  const renderOrderSummary = () => {
    const renderKeyValuePair = (title, value, valueColord) => {
      return (
        <div className=" flex justify-between items-center">
          <h1 className="text-gray-400">{title}</h1>
          <h1 className={valueColord || "text-green-400"}>{value}</h1>
        </div>
      );
    };

    const renderButton = () => {
      return (
        <button className="w-full h-9 bg-gradient-to-r mt-2 from-amber-500 rounded-md to-amber-200 text-white flex justify-center items-center">
          Order Now
        </button>
      );
    };

    return (
      <div className="py-5 bg-white">
 { 
 showFull?
 <>
            <h1 className="font-bold text-lg">Order Summary</h1>
            {renderKeyValuePair("MRP total", calculateItemsTotal())}
            {couponCodeSaved?
            renderKeyValuePair("Coupon Discount", COUPON_DISCOUNT): null}
          
            {renderKeyValuePair("Shipping Charges", "FREE")}
      

            <div className="w-full bg-gray-200 h-1 mt-2 mb-2" />
            {renderKeyValuePair("Estimated Total", calculateItemsTotal(), "text-black")}
        </>: null}
        {renderButton()}
      </div>
    );
  };

  return (
    <div className="w-full shrink-0 rounded-t-xl bg-white p-5 shadow-[0_-4px_4px_rgb(0,0,0,0.12)]">
      {renderTotalAmount()}
      {showFull&& renderLabels()}
      {renderOrderSummary()}
    </div>
  );
};

export default EstimatedTotal;
