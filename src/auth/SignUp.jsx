import { FaSquareXTwitter } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router";
const SignUp = () => {
  return (
    <div className="bg-base-200 min-h-screen ">
      <div className="w-1/2 flex mx-auto py-24 text-xl font-semibold ">
        <div className=" p-12  bg-base-100 w-full  shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center  font-bold ">Sign UP</h1>
          <form className=" flex flex-col gap-3">
            <div className="">
              <p className="mb-2">Email</p>

              <input
                type="email"
                placeholder="Give a valid email"
                className=" border-2 font-normal w-full p-2"
                required
              />
            </div>

            <div className="">
              <p className="mb-2">Password</p>

              <input
                type="password"
                placeholder="give a hard password"
                className=" border-2 font-normal  w-full p-2"
                required
              />
            </div>
            <div className="">
              <p className="mb-2">Confirm password</p>

              <input
                type="password"
                placeholder="Confirm your password"
                className=" border-2 font-normal  w-full p-2"
                required
              />
            </div>

            <div className="">
              <button className="w-full mt-4 bg-blue-500 py-2 font-bold text-white ">
                Sign Up
              </button>
            </div>
          </form>
          <div>
            <div className="divider">Or use one of these options</div>
            <div className="flex text-4xl ">
              <div className="mx-auto flex gap-8">
                <button className="border hover:border-blue-500 p-3">
                  <FaSquareXTwitter />
                </button>
                <button className="border hover:border-blue-500 p-3">
                  {" "}
                  <FcGoogle />
                </button>
                <button className="border hover:border-blue-500 p-3">
                  <BsGithub />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-center text-sm">
              Already have an account? Go to{" "}
              <Link className="text-blue-500" to="/signIn">
                Sign In
              </Link>{" "}
              Page{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
