import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import SignInModal from "./SignInModal";
import { auth } from "../../utils/firebase";

const Auth = () => {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home", { replace: true });
      } else {
        setIsAuthReady(true);
      }
    });

    return unsubscribe;
  }, [navigate]);

  if (!isAuthReady) return null;

  return (
    <div
      className="h-full w-full
     "
    >
      <div className="absolute z-40 flex h-screen w-screen items-center justify-center">
        <SignInModal />
      </div>
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://img.magnific.com/free-photo/black-friday-elements-assortment_23-2149074076.jpg?semt=ais_hybrid&w=740&q=80"
        ></img>
      </div>
    </div>
  );
};

export default Auth;
