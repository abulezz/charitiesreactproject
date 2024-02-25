import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
import {AuthService} from "../Components/AuthService";
import {AuthContextV2} from "../Components/AuthContxtV2";

const SignIn = () => {
  const user = useContext(AuthContextV2);
  const navigate = useNavigate();

  const authServive = new AuthService()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Attempting to sign in with: ", email, password);
    authServive.signin(email,password)
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

  return (
    <div>
      <h1>Sign In</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit">Sign In</button>
      </form>
      <br />
      <p>
        No account? <Link to="/signup">sign up</Link> instead
      </p>
    </div>
  );
};

export default SignIn;
