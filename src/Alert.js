/** Alert component
 *
 * Shows bootstrap style alerts
 *
 * Used for LoginForm, SignupForm, and Profile components
 */

const Alert = ({ type = "danger", messages = [] }) => {
  return (
    <div className={`alert alert-${type} m-3`} role="alert">
      {messages.map((error) => (
        <p className="mb-0 small">{error}</p>
      ))}
    </div>
  );
};

export default Alert;
