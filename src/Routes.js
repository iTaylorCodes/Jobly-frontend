import { Switch, Route, Redirect } from "react-router-dom";
import Company from "./Company";
import CompaniesList from "./CompaniesList";
import JobsList from "./JobsList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import Home from "./Home";

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
