import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import UserContext from "../auth/UserContext";

/** Navigation Bar.
 * Renders at top of every page from the App Component.
 *
 * When a user is logged in, shows links to main areas of site.
 * When not logged in shows links to Login and Signup forms.
 */

const NavBar = ({ logout }) => {
  const { currentUser } = useContext(UserContext);
  if (!currentUser) {
    return (
      <nav className="NavBar">
        <div className="NavBar-left">
          <NavLink exact to="/" className="NavBar-link">
            Jobly
          </NavLink>
        </div>
        <div className="NavBar-right">
          <NavLink exact to="/login" className="NavBar-link">
            Login
          </NavLink>
          <NavLink exact to="/signup" className="NavBar-link">
            Signup
          </NavLink>
        </div>
      </nav>
    );
  }
  return (
    <nav className="NavBar">
      <div className="NavBar-left">
        <NavLink exact to="/" className="NavBar-link">
          Jobly
        </NavLink>
      </div>
      <div className="NavBar-right">
        <NavLink exact to="/companies" className="NavBar-link">
          Companies
        </NavLink>
        <NavLink exact to="/jobs" className="NavBar-link">
          Jobs
        </NavLink>
        <NavLink exact to="/profile" className="NavBar-link">
          Profile
        </NavLink>
        <Link to="/" className="NavBar-link" onClick={logout}>
          Log out {currentUser.username || currentUser.firstName}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
