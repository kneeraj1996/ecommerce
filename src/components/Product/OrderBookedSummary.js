import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faChampagneGlasses,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const OrderBookedSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-gradient-to-b from-green-400 to-white justify-center flex items-center">
      <div className="p-5 h-[40%] md:h-1/2 w-full md:w-1/3 mx-5 rounded-2xl bg-gradient-to-b from-green-200 to-white shadow-xl border border-dashed">
        <div className="flex justify-center h-1/3">
          <FontAwesomeIcon
            className="text-green-700 text-3xl md:text-7xl"
            icon={faCheckCircle}
            beat
            beatFade
            style={{ "--fa-animation-duration": "3s" }}
          />
        </div>
        <div className="flex justify-center items-center ">
          <h1 className="text-lg md:text-2xl font-bold">Payment Successful</h1>
          <FontAwesomeIcon icon={faChampagneGlasses} />
        </div>

        <h1 className="flex justify-center items-center text-center my-2 md:my-4">
          Your payment has been successfully processed. Now you can go to the
          homepage & discover new products.
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/home", { replace: true })}
            className="bg-gradient-to-t md:mt-5 from-green-400 to-green-100 py-4 rounded-lg w-[80%] text-white font-bold"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderBookedSummary;
