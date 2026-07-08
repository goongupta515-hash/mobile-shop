import { Link } from "react-router-dom";
import "../styles/Login.css";

function Register() {
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Create Account 📝</h1>

        <p>Register to continue shopping</p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="register-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;