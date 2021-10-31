import { useState } from "react";
import { useHistory } from "react-router";
import Alert from "../Alert";

/** Login Form.
 *
 * Shows a form to login and manages update to state on changes.
 * On submission logs in and redirects to /companies route
 *
 * Routed at /login
 */

const LoginForm = ({ login }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  // Handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  };

  // Handles changing form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-7 col-lg-5">
        <h1 className="m-3">Login</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="m-3">
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
                required
              />
            </div>
            <div className="m-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="form-control"
                placeholder="Password"
                autoComplete="current-password"
                required
              />
            </div>

            {formErrors.length ? (
              <Alert type="danger" messages={formErrors} />
            ) : null}

            <div className="m-3">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
