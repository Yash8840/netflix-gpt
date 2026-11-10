import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL, NETFLIX_LOGO_URL, USER_AVATAR_LOGO_url } from "../utils/constants";
import { isvalid } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const signInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();

  const handleFormSubmit = async () => {
    const emailVal = emailRef.current.value;
    const passVal = passRef.current.value;
    const nameVal = isSignInForm ? null : nameRef.current.value;

    const message = isvalid(emailVal, passVal, nameVal);

    if (message === null) {
      setIsSubmitting(true);
      if (!isSignInForm) {
        try {
          const userCred = await createUserWithEmailAndPassword(
            auth,
            emailVal,
            passVal,
          );
          console.log(userCred);
          await updateProfile(userCred.user, {
            displayName: nameVal,
            photoURL: USER_AVATAR_LOGO_url, // Set the default avatar URL
          });
          //get the current user after profile update and dispatch to redux store, then only the user's displayName and photoURL will be available in the redux store
          const currentUser = auth.currentUser;

          dispatch(
            addUser({
              uid: currentUser.uid,
              email: currentUser.email,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
            }),
          );
        } catch (err) {
          console.log(err.code + " : " + err.message);
          setErrorMsg(err.message);
        }
      } else {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            emailVal,
            passVal,
          );
          console.log("Successfully logged in:", userCredential.user);
        } catch (error) {
          console.error("Login Error:", error.message);
          setErrorMsg(error.message);
        }
      }
      setIsSubmitting(false);
    } else {
      setErrorMsg(message);
    }
  };
  return (
    <div className="overflow-hidden h-screen relative">
      <Header />
      <div className="absolute inset-0 -z-10">
        <img
          src={BG_URL}
          alt="background"
          className="h-screen w-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black/80 w-3/12 p-9 my-30 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="text-white text-3xl font-bold py-1 mt-5 mb-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-700 p-4 my-3 w-full"
            ref={nameRef}
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Email Address"
          className="bg-gray-700 p-4 my-3 w-full"
        />
        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-3 w-full"
        />
        <button
          onClick={handleFormSubmit}
          className="bg-red-700 text-white p-3 my-3 w-full rounded-md cursor-pointer" disabled={isSubmitting}>
          
          {isSubmitting
            ? isSignInForm
              ? "Signing In..."
              : "Signing Up..."
            : isSignInForm
              ? "Sign In"
              : "Sign Up"}
        </button>

        {errorMsg && <p className="text-red-500 font-bold">{errorMsg}</p>}

        <p className="my-3 cursor-pointer underline" onClick={signInHandler}>
          {isSignInForm ? "New User? Sign up now" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
