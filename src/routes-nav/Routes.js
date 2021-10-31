import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Company from "../companies/Company";
import CompaniesList from "../companies/CompaniesList";
import JobsList from "../jobs/JobsList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import Profile from "../profile/Profile";
import Home from "../homepage/Home";

const Routes = ({ login, signup }) => {
  return (
    <Switch>
      <PrivateRoute exact path="/companies/:handle">
        <Company />
      </PrivateRoute>

      <PrivateRoute exact path="/companies">
        <CompaniesList />
      </PrivateRoute>

      <PrivateRoute exact path="/jobs">
        <JobsList />
      </PrivateRoute>

      <Route exact path="/login">
        <LoginForm login={login} />
      </Route>

      <Route exact path="/signup">
        <SignupForm signup={signup} />
      </Route>

      <PrivateRoute exact path="/profile">
        <Profile />
      </PrivateRoute>

      <Route exact path="/">
        <Home />
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
