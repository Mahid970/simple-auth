import { signOut } from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../firebase/firebase.config";

const UserDetails = ({ user, setUser }) => {
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out Successfully");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        alert({ error });
      });
  };
  return (
    <div>
      <div className="w-1/2 text-center mx-auto">
        <button
          onClick={handleSignOut}
          className="px-8 py-2 font-bold text-xl bg-blue-500 text-white"
        >
          sign Out
        </button>
        <h1 className=" text-3xl font-semibold">{user.displayName}</h1>
        <p>{user.email}</p>
        <img className="flex mx-auto w-96" src={user.photoURL} alt="" />
      </div>
    </div>
  );
};
UserDetails.propTypes = {
  user: PropTypes.object,
  setUser: PropTypes.func,
};
export default UserDetails;
