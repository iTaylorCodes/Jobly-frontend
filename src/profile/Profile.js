import { useState, useContext } from "react";
import Alert from "../Alert";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: currentUser.username,
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const [isSaved, setIsSaved] = useState(false);

  // Handles form submittion
  const handleSubmit = async (e) => {
    e.preventDefault();
    let profileData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, profileData);
    } catch (errors) {
      setFormErrors(errors);
      return;
    }

    setFormData((data) => ({ ...data, password: "" }));
    setFormErrors([]);
    setIsSaved(true);

    // Reloads user data across site
    setCurrentUser(updatedUser);
  };

  // Handles changing form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
    setFormErrors([]);
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-7 col-lg-5">
        <h1 className="m-3">Profile</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <fieldset disabled className="m-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Username"
                autoComplete="username"
              />
            </fieldset>
            <div className="m-3">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="First Name"
                autoComplete="firstName"
              />
            </div>
            <div className="m-3">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                id="last-name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Last Name"
                autoComplete="lastName"
              />
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Email"
                autoComplete="email"
              />
            </div>
            <div className="m-3">
              <label htmlFor="password" className="form-label fw-bold">
                Confirm password to save changes:
              </label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Password"
                autoComplete="password"
              />
            </div>

            {formErrors.length ? (
              <Alert type="danger" messages={formErrors} />
            ) : null}

            {isSaved ? (
              <Alert type="success" messages={["Updated successfully!"]} />
            ) : null}

            <div className="m-3">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
