import { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { addCouponCode } from "../../utils/productSlice";

const ApplyCoupon = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const couponCodeSaved = useSelector((store) => store.products.couponCode);
  return (
    <div className="mx-5  my-5">
      {!couponCodeSaved ? (
        <div>
          <div
            onClick={() => setShowModal(!showModal)}
            className="flex items-center cursor-pointer"
          >
            <p className="text-sm md:text-base">Enter Coupon Code</p>
            <FontAwesomeIcon icon={showModal ? faCaretDown : faCaretUp} />
          </div>
          {showModal ? (
            <div className="flex mt-2 ">
              <input
                placeholder="Enter coupon code"
                className="h-10 md:h-12 px-2 w-3/4 border-dashed border-2 rounded-l-md text-xs md:text-base"
                onChange={(e) => setCouponCode(e.target.value)}
                value={couponCode}
              />
              <button
                onClick={() => dispatch(addCouponCode(couponCode))}
                className="bg-gray-400 font-bold text-white  px-5 rounded-r-md h-10 md:h-12 text-xs md:text-base"
              >
                Apply
              </button>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="h-14 w-full rounded-md flex justify-between border-dashed border-2 mt-2 bg-white px-3 items-center text-sm md:text-base">
          <div className="flex">
            <h1>{couponCodeSaved}</h1>
            <h1 className="ml-3 text-green-500">Applied</h1>
          </div>
          <h1
            onClick={() => {
              dispatch(addCouponCode(""));
              setCouponCode("");
            }}
            className="text-red-500 font-bold cursor-pointer"
          >
            Remove
          </h1>
        </div>
      )}
    </div>
  );
};

export default ApplyCoupon;
