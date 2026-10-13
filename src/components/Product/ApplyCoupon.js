import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const ApplyCoupon = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="mx-5  my-5">
      <div
        onClick={() => setShowModal(!showModal)}
        className="flex items-center"
      >
        <p>Enter Coupon Code</p>
        <FontAwesomeIcon icon={showModal?  faCaretDown: faCaretUp} />
      </div>
      {showModal ? (
        <div className="flex mt-2 ">
          <input
            placeholder="Enter coupon code"
            className="h-12 px-2 w-3/4 border-dashed border-2 rounded-l-md"
          />
          <button className="bg-gray-400 text-white font-medium px-5 rounded-r-md">
            Apply
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ApplyCoupon;
