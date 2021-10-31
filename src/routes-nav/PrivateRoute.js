import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, instead of <Route>
 *
 * This component checks if there is a valid user logged in.
 *
 * If not user logged in, redirect to login form.
 */

const PrivateRoute = ({ exact, path, children }) => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
};

export default PrivateRoute;
