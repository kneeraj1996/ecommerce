import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/helper";

function ProfileView({ onClose, removeUser }) {
  const user = useSelector((store) => store.config.user);
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] h-screen w-screen">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close profile"
        className="absolute inset-0 h-full w-full cursor-default"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="My account"
        className="absolute right-4 md:right-72 top-12 md:top-15 flex h-24 w-40 flex-col items-center justify-center rounded-md bg-gradient-to-tr shadow-xl from-amber-400 to-amber-100 text-black"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile"
          className="absolute right-2 top-2"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p className="text-black font-bold">{(user && user.displayName)? capitalizeFirstLetter(user.displayName):''}</p>
        <button 
          onClick={() => removeUser()}
          className="flex my-3 font-bold text-black">
          <FontAwesomeIcon
            className="text-blue-700 text-3xl"
            icon={faDoorOpen}
          />
          Log out
        </button>
      </div>
    </div>
  );
}

export { ProfileView };
