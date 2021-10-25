import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  // if (!user) {
  //   return (
  //     <nav className="NavBar">
  //       <div>
  //         <NavLink exact to="/home">
  //           Jobly
  //         </NavLink>
  //       </div>
  //       <div>
  //         <NavLink exact to="/login">
  //           Login
  //         </NavLink>
  //         <NavLink exact to="/signup">
  //           Signup
  //         </NavLink>
  //       </div>
  //     </nav>
  //   );
  // }
  return (
    <nav className="NavBar">
      <div>
        <NavLink exact to="/home">
          Jobly
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/companies">
          Companies
        </NavLink>
        <NavLink exact to="/jobs">
          Jobs
        </NavLink>
        <NavLink exact to="/profile">
          Profile
        </NavLink>
        <NavLink exact to="/logout">
          Log out {/* USER */}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
