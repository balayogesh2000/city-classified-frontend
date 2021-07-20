import React from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Login = ({ setIsAuth }) => {
  return (
    <section className="signup">
      <div className="container">
        <form>
          <div className="mb-1">
            <label htmlFor="userCategory" className="form-label">
              User Category
            </label>
            <select
              name="userCategory"
              className="form-select"
              aria-label="Default select example"
              id="userCategory"
            >
              <option value="admin">Admin</option>
              <option value="posters">Posters</option>
              <option value="viewers">Viewers</option>
            </select>
          </div>
          <div className="mb-1">
            <label htmlFor="userID" className="form-label">
              User ID
            </label>
            <input
              name="userID"
              required
              type="userID"
              className="form-control form-control-sm"
              id="userID"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              required
              type="password"
              className="form-control form-control-sm"
              id="password"
            />
          </div>
          <div className="mt-4">
            <button type="submit" className="btn btn-success submit">
              Login
            </button>
          </div>
          <div className="mt-3">
            <p
              style={{
                fontSize: "14px",
                textAlign: "center",
                marginBottom: "3px",
                lineHeight: "1.7",
              }}
            >
              Don't have an account?
              <Link to="/signup"> Please signup to continue</Link> or
              <Link to="/" onClick={() => setIsAuth(true)}>
                Login as guest
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
