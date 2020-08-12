import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

function Login() {
  const history = useHistory("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); //prevents refresh

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
    history.push("/");
  };
  const register = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
    history.push("/");
  };

  return (
    <div className="login">
      <Link to="/">
        <img src="green.png" alt="logo" className="login_logo" />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_signinBT">
            Sign In
          </button>
          <button onClick={register} className="login_createBT">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
