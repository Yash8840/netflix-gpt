import React, { useRef, useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { isvalid } from "../utils/validate";

const LoginPage = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg] = useState("");
  const signInHandler = () => {
    setIsSignInForm(!isSignInForm);
  };
  const emailRef = useRef();
  const passRef = useRef();

  const handleFormSubmit = () => {
    const emailVal = emailRef.current.value;
    const passVal = passRef.current.value;

    const message = isvalid(emailVal, passVal);
    setErrorMsg(message);
  }
  return (
    <div className="overflow-hidden h-screen relative">
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <form onSubmit={(e)=>{e.preventDefault();}} className="absolute bg-black/80 w-3/12 p-8 my-25 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70">
        <h1 className="text-white text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-700 p-4 my-4 w-full"
          />
        )}
        <input
        ref={emailRef}
          type="text"
          placeholder="Email"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <input
        ref={passRef}
          type="password"
          placeholder="Password"
          className="bg-gray-700 p-4 my-4 w-full"
        />
        <button onClick={handleFormSubmit} className="bg-red-600 text-white p-3 my-4 w-full rounded-md cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {errorMsg && <p className="text-red-500 font-bold">{errorMsg}</p>}

        <p className="my-4 cursor-pointer underline" onClick={signInHandler}>
          {isSignInForm ? "New User? Sign up now" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
