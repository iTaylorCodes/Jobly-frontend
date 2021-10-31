import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "../auth/UserContext";

/** Jobly Homepage.
 *
 * Shows a welcome back message if user is logged in.
 *
 * Otherwise shows login and signup buttons.
 */

const Home = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="Home">
      <div className="container text-center">
        <h1 className="m-3">Jobly</h1>
        <p className="lead">Your one stop destination for fake jobs.</p>
        {currentUser ? (
          <h3>
            Welcome Back, {currentUser.firstName || currentUser.username}!
          </h3>
        ) : (
          <div>
            <Link to="/login" className="btn btn-primary m-3">
              Log in
            </Link>
            <Link to="/signup" className="btn btn-primary">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
