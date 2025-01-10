import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import UserDetails from "./UserDetails";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.

        // The signed-in user info.
        const user = result.user;
        setUser(user);
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.

        const errorMessage = error.message;
        setShowErrorMessage(errorMessage);

        // ...
      });
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const githubUser = result.user;
        setUser(githubUser);
        console.log(githubUser);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setShowErrorMessage(errorMessage);
      });
  };

  const handleFromSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email + password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setShowErrorMessage(errorMessage);
      });
  };

  return (
    <div className="bg-base-200 min-h-screen ">
      {user ? (
        <UserDetails user={user} setUser={setUser}></UserDetails>
      ) : (
        <div className="w-1/2 flex mx-auto py-24 text-xl font-semibold ">
          <div className=" py-8 px-12  bg-base-100 w-full  shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center  font-bold ">Sign In</h1>
            <form onSubmit={handleFromSubmit} className=" flex flex-col gap-4">
              <div className="">
                <p className="mb-2">Email</p>

                <input
                  type="email"
                  name="email"
                  placeholder="Type your email"
                  className=" border-2 font-normal w-full p-2"
                  required
                />
              </div>
              <div className="">
                <div className="">
                  <p className="mb-2">Password</p>

                  <div className="flex ">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Type your password"
                      className=" border-2 font-normal  w-full p-2"
                      required
                    />
                    <button onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? (
                        <FaEyeSlash></FaEyeSlash>
                      ) : (
                        <FaEye></FaEye>
                      )}
                    </button>
                  </div>
                </div>
                <label className="">
                  <a href="#" className=" text-sm font-normal">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="">
                <button className="w-full bg-blue-500 py-2 font-bold text-white ">
                  Sign In
                </button>
              </div>
            </form>
            <div className="my-3">
              <p className="text-red-500 text-center text-sm">
                {showErrorMessage}
              </p>
            </div>
            <div>
              <div className="divider">Or use one of these options</div>
              <div className="flex text-4xl ">
                <div className="mx-auto flex gap-8">
                  <button className="border hover:border-blue-500 p-3">
                    <FaSquareXTwitter />
                  </button>
                  <button
                    onClick={handleGoogleSignIn}
                    className="border hover:border-blue-500 p-3"
                  >
                    {" "}
                    <FcGoogle />
                  </button>
                  <button
                    onClick={handleGithubSignIn}
                    className="border hover:border-blue-500 p-3"
                  >
                    <BsGithub />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-center text-sm">
                Do not have an account? Go to{" "}
                <Link className="text-blue-500" to="/signUp">
                  Sign Up
                </Link>{" "}
                Page{" "}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
