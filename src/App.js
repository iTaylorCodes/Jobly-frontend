import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import JoblyApi from "./api";
import useLocalStorage from "./hooks/useLocalStorage";
import NavBar from "./routes-nav/NavBar";
import Routes from "./routes-nav/Routes";
import UserContext from "./auth/UserContext";

// Key name for storing token in localStorage
export const LOCAL_STORAGE_TOKEN = "jobly-token";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [token, setToken] = useLocalStorage(LOCAL_STORAGE_TOKEN);

  useEffect(() => {
    const getCurrentUser = async () => {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (e) {
          console.error("Error Loading user info", e);
          setCurrentUser(null);
        }
      }
    };

    getCurrentUser();
  }, [token]);

  // Handles logging out
  const logout = () => {
    setCurrentUser(null);
    setToken(null);
  };

  // Handles signing up
  const signup = async (signupData) => {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Signup attempt failed", errors);
      return { success: false, errors };
    }
  };

  // Handles login
  const login = async (loginData) => {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("Login attempt failed", errors);
      return { success: false, errors };
    }
  };

  // Checks if current user already applied for job
  const hasAppliedToJob = (id) => {
    return applicationIds.has(id);
  };

  // Handles applying to a job
  const applyToJob = (id) => {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  };

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}
    >
      <div className="App">
        <NavBar logout={logout} />
        <div>
          <Routes login={login} signup={signup} />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
