import { Switch, Route, Redirect } from "react-router-dom";
import Company from "../companies/Company";
import CompaniesList from "../companies/CompaniesList";
import JobsList from "../jobs/JobsList";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import Profile from "../profile/Profile";
import Home from "../homepage/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/companies/:handle">
        <Company />
      </Route>
      <Route exact path="/companies">
        <CompaniesList />
      </Route>
      <Route exact path="/jobs">
        <JobsList />
      </Route>
      <Route exact path="/login">
        <LoginForm />
      </Route>
      <Route exact path="/signup">
        <SignupForm />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/logout">
        <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
