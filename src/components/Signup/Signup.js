import React from "react";
import { Link } from "react-router-dom";

import "./Signup.css";

const Signup = () => {
  return (
    <section className="signup">
      <div className="container">
        <form>
          <div className="mb-1">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              name="firstName"
              required
              type="text"
              className="form-control form-control-sm"
              id="firstName"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              name="lastName"
              required
              type="text"
              className="form-control form-control-sm"
              id="lastName"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              required
              type="email"
              className="form-control form-control-sm"
              id="email"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="contact" className="form-label">
              Contact Number
            </label>
            <input
              name="contact"
              required
              type="text"
              className="form-control form-control-sm"
              id="contact"
              pattern="[0-9]{10}"
            />
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
          <div className="mt-4">
            <button type="submit" className="btn btn-success submit">
              Sign Up
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
              Already have an account?
              <Link to="/login"> Please login to continue</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
