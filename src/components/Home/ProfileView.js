import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";

function ProfileView() {
  return (
    <div className="fixed inset-0 z-[60] h-screen w-screen">
      <div className="bg-gradient-to-tr from-purple-400 absolute h-24 flex flex-col justify-center items-center w-40 rounded-md top-14 right-72 text-white">
        <p className="text-white font-bold">Neeraj Kalra</p>
        <button className="flex my-3 font-bold text-white">
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
