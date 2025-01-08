import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-24 my-3 ">
      <div className="">
        <h3 className="  text-blue-500 font-bold text-3xl">Simple Auth</h3>
      </div>
      <div className="">
        <ul className="flex gap-12 text-xl">
          <NavLink to="/">
            <li className="font-bold">Home</li>
          </NavLink>

          <NavLink to="signIn">
            <li className="font-bold">Sign In</li>
          </NavLink>
          <NavLink to="signUp">
            {" "}
            <li className="font-bold">Sign Up</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
