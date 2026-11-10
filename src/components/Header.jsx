import React from "react";
import { NETFLIX_LOGO_URL, USER_AVATAR_LOGO_url } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { resetGPTSearch, toggleGPTSearch } from "../store/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user); // Access user state from Redux store
  const dispatch = useDispatch();
  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };
  const handleSignOut = async () => {
    // Implement sign-out logic here
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(resetGPTSearch());
        dispatch(
          addUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          }),
        );
        navigate("/browse"); // Redirect to browse page if user is logged in
      } else {
        dispatch(resetGPTSearch());
        dispatch(removeUser());
        navigate("/"); // Redirect to login page if user is not logged in
      }
    });
    return () => unsubscribe(); // Unsubscribe on unmount
  }, [dispatch, navigate]);

  if (!user) {
    return (
      <div className="z-10 absolute bg-gradient-to-b from-black to-transparent w-full p-4">
        <img
          src={NETFLIX_LOGO_URL}
          alt="Netflix Logo"
          className="w-44 cursor-pointer"
        />
      </div>
    );
  }
  return (
    <div className="absolute top-0 left-0 z-50 flex items-center w-full px-3 py-3 gap-5 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mr-7">
        <img
          src={NETFLIX_LOGO_URL}
          alt="Netflix Logo"
          className="w-23 h-14 cursor-pointer"
        />
      </div>
      <div>
        <ul className="flex gap-4 text-gray-300 cursor-pointer">
          <li className="p-3">Home</li>
          <li className="p-3">TV Shows</li>
          <li className="p-3">Movies</li>
        </ul>
      </div>
      <div className=" flex items-center gap-2 absolute right-3">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          onClick={handleGPTSearch}>
          GPT Search
        </button>
        <img
          src={user.photoURL}
          alt="User Avatar"
          className="w-8 h-8 cursor-pointer"
        />
        <span className="text-gray-300 cursor-pointer" onClick={handleSignOut}>
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Header;
