import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-24 py-3">
      <div className="">
        <h3 className="  text-blue-500 font-bold text-3xl">Simple Auth</h3>
      </div>
      <div className="">
        <ul className="flex gap-8 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-2 px-4 py-1  border-blue-500 text-blue-500"
                : " px-4 py-1"
            }
          >
            <li className="font-bold">Home</li>
          </NavLink>

          <NavLink
            to="signIn"
            className={({ isActive }) =>
              isActive
                ? "border-2 px-4 py-1 border-blue-500 text-blue-500"
                : " px-4 py-1"
            }
          >
            <li className="font-bold">Sign In</li>
          </NavLink>
          <NavLink
            to="signUp"
            className={({ isActive }) =>
              isActive
                ? "border-2 px-4 py-1 border-blue-500 text-blue-500"
                : " px-4 py-1"
            }
          >
            {" "}
            <li className="font-bold">Sign Up</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
