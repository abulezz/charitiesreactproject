import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";

const SignUp = () => {
  const { user, signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const validatePassword = (password: string, repeatPassword: string) => {
    return password === repeatPassword;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validPassword = validatePassword(password, repeatPassword);
    if (validPassword) {
      console.log("Attempting to sign up with: ", email, password);
      signup(email, password);
    } else {
      console.log("Passwords do not match");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/account");
    }
  }, [user, navigate]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <br />
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="repeatPassword" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repeatPassword"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <br />

      <p>
        Already got an account? <Link to="/signin">sign in</Link> instead
      </p>
    </div>
  );
};

export default SignUp;
